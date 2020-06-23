import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Characterize from './components/Characterize';
import Dna from './components/Dna';
import Protein from './components/Protein';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='PrimerDriver'>
                <Stack.Screen name='Home' component={Home} options={{ title: 'PrimerDriver' }} />
                <Stack.Screen name='Characterize' component={Characterize} options={{ title: 'Primer Characterization' }} />
                <Stack.Screen name='DNA' component={Dna} options={{ title: 'DNA-based Primer Design' }} />
                <Stack.Screen name='Protein' component={Protein} options={{ title: 'Protein-based Primer Design' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
