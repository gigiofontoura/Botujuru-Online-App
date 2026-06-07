import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/homeScreen"
import LoginScreen from "./screens/loginScreen"
import SignUpScreen from "./screens/signUpScreen"
import FirstScreenNews from "./screens/firstScreenNews"

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Sign" component={SignUpScreen}/>
        <Stack.Screen name="FirstScreen" component={FirstScreenNews}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  )
};
