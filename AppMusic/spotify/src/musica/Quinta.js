import React from 'react';
import{View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Quinta(){
  const letra= `Quinta-feira
Em algum momento tinha que sair da vibe triste, né?
Por algum motivo, quinta me lembra muito um samba

Chamei ela pra sambar, ah, ah, ah, ah
Pôr do Sol na quinta-feira, ah, ah, ah, ah
Ela adora ver o mar, ah, ah, ah, ah
Vem sentir o pé na areia, ah, ah, ah, ah

Mas e se ela soubesse que a gente combina tanto
Será que demoraria pra mim te ter nos braços
Se a mãe dela soubesse
Que às vezes o caminho de casa ela esquece
E aparece aqui

Pra me ver na quinta-feira
Se dependesse dela, ficava a noite inteira
Da última vez levou minha blusa
Tá de brincadeira
Eu confiaria no teu jogo mas tu é traiçoeira
Vem falando pra mim

Que só o Vmzin faz a vibe fim de tarde
Consome cafézin, eu te deixo à vontade
Festa em Ipanema, meu amor, eu tô sem time
E pra resolver o problema que tu disse da saudade

Eu chamei ela pra sambar, ah, ah, ah, ah
Pôr do Sol na quinta-feira, ah, ah, ah, ah
Ela adora ver o mar, ah, ah, ah, ah
Vem sentir o pé na areia, ah, ah, ah, ah

Mano, o clima de Fortal
Ela aquece, ela desce, ela dança
Se solta e balança
Ela sabe que o VM é o chefe
Mas cê não é do tipo que obedece
Ela é cheia de marra e dá perdido até na mãe

Chamei ela pra sambar, iá iá iá
Pra escutar um Tom Jobim
Que até acabar com esse negócio de você
Viver sem mim

Aí, pode falar
Nosso país é muito foda, né?
Eu curto essa vibe
Feliz quinta-feira pra geral

Meu Deus, como é que aguenta essa mulher?
Ela faz o que ela quer
Ela diz o que quiser
Independente ela
Ai de quem quiser tentar tratá-la com deboche
Ela com certeza vai te olhar com olhar esnobe

Ela sofreu com o tempo
Hoje só pensa em ser mais forte
Encontrou sua própria paz
Então com ela ninguém pode

Eu chamei ela pra sambar, ah, ah, ah, ah
Pôr do Sol na quinta-feira, ah, ah, ah, ah
Ela adora ver o mar, ah, ah, ah, ah
Vem sentir o pé na areia, ah, ah, ah, ah

Mano, o clima de Fortal
Ela aquece, ela desce, ela dança
Se solta e balança
Ela sabe que o VM é o chefe
Mas cê não é do tipo que obedece
Ela é cheia de marra e dá perdido até na mãe

Composição: Vmz, JowSanth. Somente para uso não comercial.`;

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