import React from 'react';
import{View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Sinceramente(){
  const letra= `Sinceramente, eu não consigo te entender
Você diz que eu faço falta, mas também não quer me ter
Deixa nossas fotos salvas, mas me bloqueia na rede
Me liga de madrugada pra falar que não tá bem
E a minha mente já não sabe o que fazer
Se eu bater na tua casa, será que vai me atender?
Não tava fazendo nada e trouxe flores para você
Dizem que a saudade mata, e eu não vou pagar pra ver

Então, deixa os outros pensar que não vale a pena
Nós ficar sem se falar não é de bom gosto
Eu vou fazer tu se arrumar pra fazer cena
Pra eu poder te bagunçar tudo de novo
A sua boca nunca sai da minha cabeça
Eu amo poder passear pelo teu corpo
Eu posso te ouvir reclamar daquela cena
Mas só não quero mais ficar sem ver seu rosto

Porque, sinceramente, eu não consigo te entender
Você diz que eu faço falta, mas também não quer me ter
Deixa nossas fotos salvas, mas me bloqueia na rede
Me liga de madrugada pra falar que não tá bem
E a minha mente já não sabe o que fazer
Se eu bater na tua casa, será que vai me atender?
Eu não tô fazendo nada e comprei flores pra você
Dizem que a saudade mata, e eu não vou pagar pra ver

Então, deixe os outros pensar que não vale a pena
Nós ficar sem se falar não é de bom gosto
Eu vou fazer tu se arrumar pra fazer cena
Pra eu poder te bagunçar tudo de novo
A sua boca nunca sai da minha cabeça
Eu amo poder passear pelo teu corpo
Eu posso te ouvir reclamar daquela cena
Mas só não quero mais ficar sem ver seu rosto

Porque, sinceramente, eu não consigo te entender
Você diz que eu faço falta, mas também não quer me ter
Deixa nossas fotos salvas, mas me bloqueia na rede
Me liga de madrugada pra falar que não tá bem
E a minha mente já não sabe o que fazer
Se eu bater na tua casa, será que vai me atender?
Eu não tô fazendo nada e comprei flores pra você
Dizem que a saudade mata, e eu não vou pagar pra ver

Composição: Sotam, Rob, Kabeh, Vertigo. Somente para uso não comercial.`;

return(
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Sinceramente</Text>

      <Text style={styles.subtitulo}>
      Sotam
      </Text>

      <View style={styles.resumo}>
        <Text style={styles.textoResumo}>
          {letra}
        </Text>
      </View>
    </View>
  </ScrollView>
);
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#a4d2f7',
    paddingBottom:30
  },
  titulo:{
    fontSize:30,
    textAlign:'center',
    color:'#ffffff',
    fontWeight:'700',
    marginTop:50,
    marginBottom:10
  },
  subtitulo:{
    fontSize:20,
    textAlign:'center',
    color:'#1f3fb7',
    marginBottom:20
  },
  resumo:{
    marginHorizontal:15,
    backgroundColor:'#ffffff70',
    borderRadius:7,
    padding:12
  },
  textoResumo:{
    fontSize:19,
    lineHeight:32,
    color:'#222'
  }
});