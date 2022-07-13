import React, { useState, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Card, Title, Button } from 'react-native-paper'
import globalstyles from '../theme/Estilos'
import axios from 'axios'

export default function NuevaRopa({ navigation, route }) {

  const { setConsultarApi } = route.params;
  const [ropa, setRopa] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [tallas, setTallas] = useState('');

  useEffect(() => {
    if (route.params.ropas) {
      const { ropa, descripcion, cantidad, precio, tallas } = route.params.ropas;
      setRopa(ropa)
      setDescripcion(descripcion)
      setCantidad(cantidad)
      setPrecio(precio)
      setTallas(tallas)
    }
  }, [])

  const guardarRopa = async () => {
    if (ropa === '' || descripcion === '' || cantidad === '' || precio === '' || tallas === '') {
      return;
    }
    const ropas = { ropa, descripcion, cantidad, precio, tallas };

    if (route.params.ropas) {
      const { id } = route.params.ropas;
      ropas.id = id;
      const url = `http://192.168.100.4:3000/ropas/${id}`;

      try {
        await axios.put(url, ropas)
      } catch (error) {
        console.log(error);
      }

    } else {

      try {
        const datos = await axios.post('http://192.168.100.4:3000/ropas', ropas)
      } catch (error) {
        console.log(error);
      }

    }
    navigation.navigate("ListaRopa");
    setRopa('');
    setDescripcion('');
    setCantidad('');
    setPrecio('');
    setTallas('');
    setConsultarApi(true);
  }

  return (
    <Card style={globalstyles.container}>
      <Card.Content>
        <Title style={globalstyles.titulo}>ROPA</Title>

        <View style={globalstyles.caja}>
          <Text style={globalstyles.nombre}>ROPA</Text>
          <TextInput style={globalstyles.input} placeholder='Ropa' keyboardType='default'
            onChangeText={(texto) => setRopa(texto)} value={ropa} />
        </View>

        <View style={globalstyles.caja}>
          <Text style={globalstyles.nombre}>DESCRIPCION</Text>
          <TextInput style={globalstyles.input} placeholder='Descripcion' keyboardType='default'
            onChangeText={(texto) => setDescripcion(texto)} value={descripcion} />
        </View>

        <View style={globalstyles.caja}>
          <Text style={globalstyles.nombre}>CANTIDAD</Text>
          <TextInput style={globalstyles.input} placeholder='Cantidad' keyboardType='numeric'
            onChangeText={(texto) => setCantidad(texto)} value={cantidad} />
        </View>

        <View style={globalstyles.caja}>
          <Text style={globalstyles.nombre}>PRECIO</Text>
          <TextInput style={globalstyles.input} placeholder='Precio' keyboardType='numeric'
            onChangeText={(texto) => setPrecio(texto)} value={precio} />
        </View>

        <View style={globalstyles.caja}>
          <Text style={globalstyles.nombre}>TALLAS</Text>
          <TextInput style={globalstyles.input} placeholder='Tallas' keyboardType='default'
            onChangeText={(texto) => setTallas(texto)} value={tallas} />
        </View>

        <Button
          style={globalstyles.boton}
          icon="folder" mode="contained" onPress={() => guardarRopa()}>
          <Text style={globalstyles.textoBoton}>GUARDAR</Text>
        </Button>

      </Card.Content>
    </Card>
  )
}
