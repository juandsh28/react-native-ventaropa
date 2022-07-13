import { StyleSheet } from 'react-native'

const globalstyles = StyleSheet.create({
  container: {
    flex: 1
  },

  titulo: {
    textAlign: 'center',
    fontWeight: '800',
    marginTop: 5,
    marginBottom: 10,
    color: '#0B5345',
    textTransform: 'uppercase'
  },

  caja: {
    marginLeft: 5,
    marginRight: 5
  },

  nombre: {
    marginBottom: 6,
    fontSize: 17,
    fontWeight: '600',
    color: '#0B5345'
  },

  input: {
    marginBottom: 18,
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#117864',
    fontSize: 16,
    paddingLeft: 5,
    borderRadius: 5
  },

  boton: {
    marginTop: 15,
    backgroundColor: '#148F77',
    marginLeft: 75,
    marginRight: 75,
    padding: 8
  },

  textoBoton: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff'
  },

  dato: {
    color: '#000',
    fontSize: 17,
    marginBottom: 18
  },

  tabla: {
    fontSize: 17,
    color: '#117864',
    fontWeight: '700'
  },

  itemTabla: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500'
  },

  icono: {
    backgroundColor: '#148F77'
  },

  fab: {
    position: 'absolute',
    margin: 25,
    right: 5,
    bottom: 20,
    backgroundColor: '#2E86C1'
  },

  boton2: {
    marginTop: 15,
    backgroundColor: '#E74C3C',
    marginLeft: 75,
    marginRight: 75,
    padding: 8
  },

  textoBoton2: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff'
  }
})

export default globalstyles;
