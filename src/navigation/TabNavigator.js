import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/barraNavegacaoInferior/homeScreen";
import SearchScreen from "../screens/barraNavegacaoInferior/searchScreen";
import VideoScreen from "../screens/barraNavegacaoInferior/videoScreen";
import ProfileScreen from "../screens/barraNavegacaoInferior/profileScreen";
import SportScreen from "../screens/menu/sportScreen";
import HealthScreen from "../screens/menu/healthScreen";
import PoliticScreen from "../screens/menu/politicScreen";
import CultureScreen from "../screens/menu/cultureScreen";
import ContactScreen from "../screens/menu/contactScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
                const icons = { Home: "home", Search: "search", Video: "play-circle", Profile: "person" };
                return <Ionicons name={icons[route.name]} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4D9F55',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Search" component={SearchScreen}/>
            <Tab.Screen name="Video" component={VideoScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Sport" component={SportScreen}/>
            <Tab.Screen name="Health" component={HealthScreen}/>
            <Tab.Screen name="Politic" component={PoliticScreen}/>
            <Tab.Screen name="Culture" component={CultureScreen}/>
        </Tab.Navigator>
    )
}

