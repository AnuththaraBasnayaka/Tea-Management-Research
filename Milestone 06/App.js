import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import LoadScreen from './components/LoadScree';
import Home from './components/Home';
import ChoseAuth from './components/ChoseAuth';
import SignUp from './components/SignUp';
import CreatePin from './components/CreatePin';
import SignIn from './components/SignIn';

export default function App() {
  return (
    <NavigationContainer initialRouteName="LoadScreen">
      <Stack.Navigator>
        <Stack.Screen name="LoadScreen" options={{headerShown: false}} component={LoadScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChoseAuth" options={{headerShown: false}} component={ChoseAuth} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Create Pin" component={CreatePin} />
        <Stack.Screen name="Sign In" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
