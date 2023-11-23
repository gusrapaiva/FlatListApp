import { Text, SafeAreaView, StyleSheet, Dimensions, FlatList } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Os melhores sabores de sorvete do 2º DS
      </Text>
      <FlatList
        data={dados} renderItem={({item})=> 
        <SafeAreaView style={styles.cxSorvete}>
          <Text style={styles.txtSorvete}>
            {item.Sorvete}
          </Text>
        </SafeAreaView>}
      />
    </SafeAreaView>
  );
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    fontSize: 30
  },
  txtSorvete: {
    fontSize: 20,
    margin: 15,
    textAlign: 'center',
    backgroundColor: '#f90f1f',
    borderRadius: 10,
    padding: 10
  },
  cxSorvete: {

  },
});

const dados = [
  {Sorvete: 'Flocos'},
  {Sorvete: 'Chocolate'},
  {Sorvete: 'Napolitano'},
  {Sorvete: 'Abacaxi ao Vinho'},
  {Sorvete: 'Trufado'},
  {Sorvete: 'Céu Azul'},
  {Sorvete: 'Brócolis'},
  {Sorvete: 'Nutella'},
  {Sorvete: 'Morango'},
  {Sorvete: 'Carambola'},
  {Sorvete: 'Chocomenta'},
  {Sorvete: 'Pistache'},
];









