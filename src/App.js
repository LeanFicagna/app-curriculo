import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Image, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/imgs/fotos.jpg';

function App() {

  function handleRedeSocial(rede_social) {

    switch(rede_social) {
      case 'linkedin':
        Alert.alert('Meu linkedin', 'https://linkedin.com/in/leanFicagna')
        break;
      case 'github':
        Alert.alert('Meu linkedin', 'https://linkedin.com/in/leanFicagna')
        break;
      case 'facebook':
        Alert.alert('Meu linkedin', 'https://linkedin.com/in/leanFicagna')
        break;
    }

  }

  return (
    <ScrollView>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>LEANDERSON FICAGNA</Text>
          <Text style={style.funcao}>Desenvolvedor FULLSTACK</Text>
          <View style={style.reder_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={{fontWeight: 'bold'}}>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>MÍDIAS UFOPA DESENVOLVIMENTO</Text>
              <Text style={style.card_content_text}>MÍDIAS UFOPA ROTEIRISTA</Text>
            </View>
          </View>

          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={{fontWeight: 'bold'}}>Formação Acadêmica</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>UFOPA - CC</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  reder_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF',
    marginTop: 10
  },
  card_content: {
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }

});

export default App;