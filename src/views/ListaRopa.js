import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Card, Title, DataTable, Avatar, FAB } from 'react-native-paper'
import globalstyles from '../theme/Estilos'
import axios from 'axios'

export default function ListaRopa({ navigation }) {

  const [ventaRopa, setVentaRopa] = useState([]);
  const [consultarApi, setConsultarApi] = useState(true);

  useEffect(() => {

    const datosRopasApi = async () => {
      try {

        const resultado = await axios.get('http://192.168.100.4:3000/ropas')
        setVentaRopa(resultado.data)
        setConsultarApi(false)

      } catch (error) {
        console.log(error);
      }
    }
    if (consultarApi) {
      datosRopasApi();
    }
  }, [consultarApi])

  return (
    <>
      <Card style={globalstyles.container}>
        <Card.Content>
          <Title style={globalstyles.titulo}>LISTA DE ROPAS</Title>

          <DataTable>
            <DataTable.Row>

              <DataTable.Cell>
                <Title style={globalstyles.tabla}>Producto</Title>
              </DataTable.Cell>

              <DataTable.Cell numeric>
                <Title style={globalstyles.tabla}>Precio</Title>
              </DataTable.Cell>

              <DataTable.Cell numeric>
                <Title style={globalstyles.tabla}>Ver</Title>
              </DataTable.Cell>

            </DataTable.Row>

            <FlatList
              data={ventaRopa}
              renderItem={({ item }) => (
                <DataTable.Row
                  onPress={() => navigation.navigate("DetallesRopa", { item, setConsultarApi })}>

                  <DataTable.Cell>
                    <Title style={globalstyles.itemTabla}>{item.ropa}</Title>
                  </DataTable.Cell>

                  <DataTable.Cell numeric>
                    <Title style={globalstyles.itemTabla}>S/. {item.precio}</Title>
                  </DataTable.Cell>

                  <DataTable.Cell numeric>
                    <Avatar.Icon style={globalstyles.icono} size={30} icon="arrow-right" />
                  </DataTable.Cell>

                </DataTable.Row>
              )}
              keyExtractor={ropa => (ropa.id)}
            />
          </DataTable>

        </Card.Content>
      </Card>

      <FAB
        style={globalstyles.fab}
        large
        icon="plus"
        label='Nueva Ropa'
        onPress={() => navigation.navigate('NuevaRopa', { setConsultarApi })}
      />
    </>
  )
}