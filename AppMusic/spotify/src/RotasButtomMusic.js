import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Sinceramente from './musica/Sinceramente';
import Gimme_that from './musica/Gimme_that';
import Quer_voar from './musica/Quer_voar';
import Quinta from './musica/Quinta';
import Musica from './pages/Musica';

const Stack= createStackNavigator();

export default function RotasButtomMusic(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Musica" component={Musica} options= {{headerShown:false}} />
    <Stack.Screen name="Gimme_that" component={Gimme_that} options= {{ title: "Gimme_that"}}/>
    <Stack.Screen name="Sinceramente" component={Sinceramente} options= {{ title: "Sinceramente"}}/>
    <Stack.Screen name="Quer_voar" component={Quer_voar} options= {{ title: "Quer_voar"}}/>
    <Stack.Screen name="Quinta" component={Quinta} options= {{ title: "Quinta"}}/>
  </Stack.Navigator>
  );
}
