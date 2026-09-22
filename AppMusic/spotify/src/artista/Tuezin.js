import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Matuê(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Matuê </Text>
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/tuezin.jpg')}
      />
      <Text style={estilo.rotulo}> Brilhando </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/tuezin2.jpg')}
      />
      <Text style={estilo.rotulo}> TrapStar </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/tuezin3.jpg')}
      />
      <Text style={estilo.rotulo}> O tempo passa </Text>
    </View>
    </ScrollView>
    </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
       Matheus Brasileiro Aguiar (Fortaleza, 11 de outubro de 1993), mais conhecido como Matuê, é um rapper, cantor, compositor e empresário brasileiro. Ficou conhecido com o single "Anos Luz", lançado em 2017 e pelo álbum Máquina do Tempo lançado em 2020. É considerado um dos símbolos do trap brasileiro
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