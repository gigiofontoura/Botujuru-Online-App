import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/auth/firstScreen";
import LoginScreen from "../screens/auth/loginScreen";
import SignUpScreen from "../screens/auth/signUpScreen";
import Home from "../screens/barraNavegacaoInferior/homeScreen";


import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();


export default function AppNavigation(){
    return(
        <Stack.Navigator initialRouteName="FirstScreen">
            <Stack.Screen name="FirstScreen" component={FirstScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Sign" component={SignUpScreen}/>

            <Stack.Screen name="MainApp" component={TabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
