import React from 'react';
import{View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Quer_voar(){
  const letra= `Passa o Bic (o Bic), põe no ar
Minha bitch (my bitch), quer voar
Botei no sport pro escapamento estralar
Troquei um Corsa num Porsche, quem tava lá?
Queimando gasolina, ah, yah

Famoso comedor de prima, ah, yah
Sexo encanta, sorriso me hipnotiza
Iza, sempre quis fuder a sua brisa

E ela diz: Fode, fode (fode, fode)
Lambe, lambe, mete bem (lambe bem)
Nunca vi tempo ruim, chupada dentro da Benz (dentro da Benz)
Eu sou um sujeito ruim, não dou moral pra ninguém
Quer um troco?
Tira esse roupão me entretém, yeah
Balança, bonita, transa na cabine que ela gosta de gritar
Se eu falar que eu amo, ela ainda acredita (ay)
Bola mais um que essa porra é rum, não é Guaravita

Passa o Bic (o Bic), põe no ar
Minha bitch (my bitch), quer voar
Botei no sport pro escapamento estralar
Troquei um Corsa num Porsche, quem tava lá?
Queimando gasolina, ah, yah
Famoso comedor de prima, ah, yah
Sexo encanta, sorriso me hipnotiza
Iza, sempre quis fuder a sua—

Vem pra cá (pra Fortal City, yeah)
Ampliar (bang bom) a visão
Eu sou lenda tipo Don, man
Saí de Fortal, fui lá fazer meu próprio nome
E hoje eu fiz uma pilha, dá pra escalar (ay, ay, ay)
Quem não gostou agora vai ter que aturar (ay, ay, ay)
The gun is on the table, quer aprender inglês? (Uau)
Ela vem treinar boca uma aula por mês (uau)
E tome, tome, tome, bebe, bebe, tome, tome
Só sai do forró quando quiser (yeah)
The drug is on the table, quer aprender inglês? (Uau)
2030, eu aqui rindo de vocês (hahaha)

Passa o Bic (o Bic), põe no ar
Minha bitch (my bitch), quer voar
Botei no sport pro escapamento estralar
Troquei um Corsa num Porsche, quem tava lá?
Queimando gasolina, ah, yah
Famoso comedor de prima, ah, yah
Sexo encanta, sorriso me hipnotiza
Iza, sempre quis fuder a sua brisa

Esse ano ninguém vai me parar, eu sigo, sigo forte
Bola um temaki bom, é só um tiro e morte
(Caixão de grande porte)
Eu sou um big dog, big money, big loss
Mas nós nunca perde, pode ficar na bad
É a (30, 30, 30, 30)
(30, 30, 30, 30, 30)

Composição: Matue, Quantich Beats, Henrique Barreto. Somente para uso não comercial.`;

return(
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Gimme That</Text>

      <Text style={styles.subtitulo}>
      Chris Brown
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


