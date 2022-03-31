import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import login from '../screens/LoginScreen';
import cadastrar from '../screens/CadScreen';
import home from '../screens/HomeScreen';

interface MainNavigationProps {

}

export type StackParams = {
    login: undefined
    cadastrar: undefined
    home: undefined
}


const Stack = createStackNavigator<StackParams>();

const MainNavigation: React.FC<MainNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='login' component={login} />
        <Stack.Screen name='cadastrar' component={cadastrar} />
        <Stack.Screen name='home' component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNavigation;