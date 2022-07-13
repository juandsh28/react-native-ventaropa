import React from 'react'
import { View, Alert } from 'react-native'
import { Text, Card, Title, Button, FAB } from 'react-native-paper'
import globalstyles from '../theme/Estilos'
import axios from 'axios'

export const DetallesRopa = ({ navigation, route }) => {

  const { setConsultarApi } = route.params;
  const { ropa, descripcion, cantidad, precio, tallas, id } = route.params.item;

  const mostrarConfirmacion = () => {
    Alert.alert(
      "¿Deseas eliminar esta ropa?",
      "Se eliminará de la tienda.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => eliminarRopa() }
      ]
    );
  };

  const eliminarRopa = async () => {
    const url = `http://192.168.100.4:3000/ropas/${id}`;
    try {
      await axios.delete(url)
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("ListaRopa");
    setConsultarApi(true);
  }

  return (
    <>
      <Card style={globalstyles.container}>
        <Card.Content>
          <Title style={globalstyles.titulo}>{ropa}</Title>

          <View style={globalstyles.caja}>
            <Text style={globalstyles.nombre}>Descripción</Text>
            <Text style={globalstyles.dato}>{descripcion}</Text>
          </View>

          <View style={globalstyles.caja}>
            <Text style={globalstyles.nombre}>Cantidad</Text>
            <Text style={globalstyles.dato}>{cantidad}</Text>
          </View>

          <View style={globalstyles.caja}>
            <Text style={globalstyles.nombre}>Precio</Text>
            <Text style={globalstyles.dato}>{precio}</Text>
          </View>

          <View style={globalstyles.caja}>
            <Text style={globalstyles.nombre}>Tallas</Text>
            <Text style={globalstyles.dato}>{tallas}</Text>
          </View>

          <Button
            style={globalstyles.boton2}
            icon="delete" mode="contained" onPress={() => mostrarConfirmacion()}>
            <Text style={globalstyles.textoBoton2}>ELIMINAR</Text>
          </Button>

        </Card.Content>
      </Card>

      <FAB
        style={globalstyles.fab}
        large
        icon="pencil"
        label='Editar'
        onPress={() => navigation.navigate('NuevaRopa', { ropas: route.params.item, setConsultarApi })}
      />

    </>
  )
}