import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstScreen from "../screens/auth/firstScreen";
import LoginScreen from "../screens/auth/loginScreen";
import SignUpScreen from "../screens/auth/signUpScreen";

import Home from "../screens/barraNavegacaoInferior/homeScreen";
import Search from "../screens/barraNavegacaoInferior/searchScreen";
import Profile from "../screens/barraNavegacaoInferior/profileScreen";

import SportScreen from "../screens/menu/sportScreen";
import HealthScreen from "../screens/menu/healthScreen";
import PoliticScreen from "../screens/menu/politicScreen";
import CultureScreen from "../screens/menu/cultureScreen";
import ContactScreen from "../screens/menu/contactScreen";
import FormScreen from "../screens/menu/formScreen";
import AmbulanciaNew from "../screens/menu/ambulanciaNew";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="FirstScreen" screenOptions={{headerShown: false}}>

      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign" component={SignUpScreen} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Sport" component={SportScreen} />

      <Stack.Screen name="Health" component={HealthScreen} />
      <Stack.Screen name="Politic" component={PoliticScreen} />
      <Stack.Screen name="Culture" component={CultureScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="AmbulanciaNew" component={AmbulanciaNew} />

    </Stack.Navigator>
  );
}