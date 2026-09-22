import React from 'react';
import{View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Gimme_that(){
  const letra= `Woo
Storch (oh)
S. Dot (yeah)
Ooh, oh
The dynamic duo

Wo-womp, womp, wo-womp, womp, wo-womp, wo-womp
It's what your body sayin'
Wo-womp, womp, wo-womp, womp wo-womp, wo-womp
(Chris Brown is in the building)

The young boy just turned sixteen and I got (uh)
Six fours and hot bikes that I rock (uh)
Keep three or four sweeties on my clock (uh)
But all that swingin' in that bikini just might convince him
Slow all the traffic down to a complete stop (uh)
'Cause you speakin' that slang that I talk (uh)
That sassy tempo with that walk (uh)
Maybe the reason that all this teenies may never see me

Mama, you may be three years older but you hot (gimme that)
You be talkin' like you like what I got (gimme that)
I know you like it how I lean in the 'lac
You could be in the back sayin': Gimme, gimme, gimme

Mama, you may be three years older but you hot (gimme that)
You be talkin' like you like what I got (gimme that)
I know you like it how I lean in the 'lac
You could be in the back sayin': Gimme, gimme, gimme

Ma, take a break, let me explain to you (woo)
What ya body got a young boy ready to do (woo)
If you take a chance to let me put them things on you
I could show you why I make them straight A's in school
I'm a hustler, trust my frame and age
Got you thinking that I'm just too young to turn your page
I can picture us switchin' lanes in the coupe
With you on the phone screamin' my name (Chris)

Mama, you may be three years older but you hot (gimme that, hot)
You be talkin' like you like what I got (gimme that, yeah)
I know you like it how I lean in the 'lac
You could be in the back sayin': Gimme, gimme, gimme (oh)

Mama, you may be three years older but you hot (gimme that, hot)
You be talkin' like you like what I got (gimme that, hey, ooh)
I know you like it how I lean in the 'lac (ooh)
You could be in the back sayin': Gimme, gimme, gimme (ooh, oh)

Wo-womp, womp, wo-womp, womp, wo-womp, wo-womp
Girl, you serious and I been watchin' you
Wo-womp, womp, wo-womp, womp, wo-womp, wo-womp
(This what your body's sayin')
Wo-womp, womp, wo-womp, womp, wo-womp, wo-womp (hey, yeah)
Wo-womp, womp, wo-womp, womp, wo-womp, wo-womp
(This what your body's sayin') (oh)

Mama, you may be three years older but you hot (gimme that, three years older)
You be talkin' like you like what I got (gimme that, ooh)
I know you like it how I lean in the 'lac
You could be in the back saying: Gimme, gimme, gimme
(You could in the back, yeah)

Mama, you may be three years older but you hot (gimme that, ooh)
You be talkin' like you like what I got (gimme that, hey)
I know you like it how I lean in the 'lac
You could be in the back sayin': Gimme, gimme, gimme (VA)

Yeah, ha
Yeah ma don't be frontin' like you don't know what's goin' on
Aight
Yeah

Composição: Scott Storch, Sean Garrett. Somente para uso não comercial.`;

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