import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Test from './pages/Test';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-cart"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen
                    name="Test"
                    component={Test}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
