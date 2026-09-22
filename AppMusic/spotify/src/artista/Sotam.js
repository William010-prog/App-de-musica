import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Sotam(){
  return(
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Sotam </Text>
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/sotam.jpg')}
      />
      <Text style={estilo.rotulo}> Brilhando </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/sotam2.jpg')}
      />
      <Text style={estilo.rotulo}> Girassóis </Text>
    </View>

    <View>
        <Image
          resizeMode={'stretch'}
          style={estilo.img}
          source={require('../../assets/fotos/sotam3.png')}
      />
      <Text style={estilo.rotulo}> Bloco dos Apaixonados </Text>
    </View>
    </ScrollView>
    </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
        Sotam (Thomaz Matos) é um cantor, compositor e rapper paulistano que se consolidou como uma das principais vozes do trap, R&B e rap romântico no Brasil. Reconhecido por sua versatilidade, ele combina batidas marcantes de trap com melodias suaves de R&B, blues e elementos do funk paulista, criando uma sonoridade envolvente e moderna.

Sua obra é focada em letras confessionais que abordam relacionamentos, vivências urbanas e desilusões amorosas. Dentre seus trabalhos de maior destaque estão faixas como "Foi Assim", "Bola Outro" e "SEM PAUSA", além de projetos aclamados como o álbum CRUSH (2022) e a série de lançamentos Até o Próximo Carnaval.
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