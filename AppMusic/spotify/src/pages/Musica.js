import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Musica(props) {
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}> As hits do ano</Text>

    <FlatList
    data={musicas}

    renderItem={({ item })=>
    <View style={estilo.musicas}>
    <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
    <Text style={estilo.txtMusicas}> {item.nome} </Text>
    </TouchableOpacity>
    <View style={estilo.rede}>
    <Text style={estilo.curtidas}>
      <MaterialCommunityIcons
      name="heart"
      size={20}
      color={'red'}
      />
      {item.like} Curtidas
      </Text>
      <Text style={estilo.reproducoes}>
      <MaterialCommunityIcons
      name="music"
      size={20}
      color={'blue'} 
      /> 
      {item.reproducoes} Reproduções
      </Text>
      </View>
       </View>
}
/>
</View>
  );
}

const musicas = [
  {
    uid:1,
    nome:'Gimme That - Chris Brown',
    like: 234,
    seguidores: 2345,
    buttom: 'Gimme_that'
  },

   {
    uid:2,
    nome:'Sinceramente - Sotam',
    like: 900,
    seguidores: 3345,
    buttom: 'Sinceramente'
  },

  {
    uid:3,
    nome:'Quer Voar - Matuê',
    like: 850,
    seguidores: 4345,
    buttom: 'Quer_voar'
  },

   {
    uid:4,
    nome:'Quinta - Vmz',
    like: 250,
    seguidores: 345,
    buttom: 'Quinta'
  },
];

const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#a4d2f7',
  },

  musicas: {
    backgroundColor: '#a2f5e9',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },

  titulo: {
   fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeigth: 700,
    marginVertical: 30,
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  txtMusicas: {
    fontSize: 20,
  },
});
