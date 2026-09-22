import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Negao(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Chris Brown </Text>
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/negao.jpg')}
      />
      <Text style={estilo.rotulo}> Brilhando </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/negao2.jpg')}
      />
      <Text style={estilo.rotulo}> Guitarra toca muito </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/negao3.jpg')}
      />
      <Text style={estilo.rotulo}> O tempo passa </Text>
    </View>
    </ScrollView>
    </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
        Christopher Maurice Brown (Tappahannock, 5 de maio de 1989) é um cantor, compositor, rapper, dançarino e ator estadunidense. Um músico de R&B com influências de pop e hip-hop que trabalha em uma variedade de gêneros, ele foi chamado de Rei do R&B por alguns contemporâneos. Suas letras frequentemente abordam temas emocionais e hedonistas.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
}

const estilo= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#a4d2f7',
  },
  img:{
    width:330,
    height:400,
    marginHorizontal:25,
    borderRadius:10,
  },
  titulo:{
    fontSize:30,
    textAlign:'center',
    color:'#ffffff',
    fontWeight:700,
    marginTop:50,
    marginBottom:30,
  },
  rotulo:{
    textAlign:'center',
    marginTop:20,
    fontSize:20,
  },
  resumo:{
    marginTop:20,
    marginHorizontal:15,
    backgroundColor:'#ffffff70',
    borderRadius:7,
    padding:8,
  },
  textoResumo:{
    fontSize:19,
  },
});