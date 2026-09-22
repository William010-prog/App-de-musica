import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Negao from './artista/Negao';
import Sotam from './artista/Sotam';
import Tuezin from './artista/Tuezin';
import Vmzin from './artista/Vmzin';
import Artista from './pages/Artista';

const Stack= createStackNavigator();

export default function RotasButtom(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Artista" component={Artista} options= {{headerShown:false}} />
    <Stack.Screen name="Negao" component={Negao} options= {{ title: "Chris Brown"}}/>
    <Stack.Screen name="Sotam" component={Sotam} options= {{ title: "Sotam"}}/>
    <Stack.Screen name="Tuezin" component={Tuezin} options= {{ title: "Matuê"}}/>
    <Stack.Screen name="Vmzin" component={Vmzin} options= {{ title: "Vmz"}}/>
  </Stack.Navigator>
  );
}
