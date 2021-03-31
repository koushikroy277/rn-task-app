import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Context from "./comp/context/context";
import Page1 from "./comp/page/Page1";
import Page2 from "./comp/page/Page2";
import Notes from "./comp/notes/Notes";
import CardNotes from "./comp/notes/CardNotes";
import CardView from "./comp/editedNotes/CardView";
import { navigationRef } from "./comp/rootNavigation";
import CustomDrawer from "./comp/CustomDrawer";

import styled from "styled-components";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
            title: "",
            headerStyle: {
              height: 0,
            }
          }} />
          <Stack.Screen name="Notes" component={Notes} options={{
            title: "Blank Notes",
            headerStyle: {
              backgroundColor: '#4ea4de',
            },
            headerTintColor: '#fff',
          }} />

          <Stack.Screen name="CardView" component={CardView} options={{
            title: "Blank Notes",
            headerStyle: {
              backgroundColor: '#4ea4de',
            },
            headerTintColor: '#fff',
          }} />
          <Stack.Screen name="CardNotes" component={CardNotes} options={{
            title: "Blank Notes",
            headerStyle: {
              backgroundColor: '#4ea4de',
            },
            headerTintColor: '#fff',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}

function HomeScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Page1} />
      <Drawer.Screen name="Personal" component={Page2} />
    </Drawer.Navigator>
  );
}
