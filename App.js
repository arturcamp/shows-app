import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import ShowsScreen from "./src/screens/Shows";
import NewShowScreen from "./src/screens/NewShow";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const TabNav = createBottomTabNavigator();

const tabBarStyles = StyleSheet.create({
  viewStyle:{
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems: "center",
    backgroundColor: "#cdcdcd",
    height: 50
  }
})
const TabBar = ({navigation,state}) => {
  return (
    <View style={tabBarStyles.viewStyle}>
      <>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Feather name="home" size={30} color={state.index===0?"purple":"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Shows")}>
          <Feather name="list" size={30} color={state.index===1?"purple":"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("NewShow")}>
          <Ionicons name="md-add" size={30} color={state.index===2?"purple":"black"} />
        </TouchableOpacity>
      </>
    </View>

  )
}

function App(){
 
  return (
    <NavigationContainer>
      
     <TabNav.Navigator tabBar={props =><TabBar{...props}/>}>
       <TabNav.Screen name={"Home"} component={HomeScreen}/>
       <TabNav.Screen name={"Shows"} component={ShowsScreen}/>
       <TabNav.Screen name={"NewShow"} component={NewShowScreen}/>
     </TabNav.Navigator>

    </NavigationContainer>
  )
}

export default App;