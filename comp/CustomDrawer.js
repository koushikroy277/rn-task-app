import React from "react";
import {
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import styled from "styled-components";

export default function CustomDrawer(props) {
  const [drop, setDrop] = React.useState(false);

  return (
    <>
      <DrawerContentScrollView {...props}>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="#fff"
          onPress={() => {props.navigation.closeDrawer();setDrop(false)}}
        >
          <DrawView>
            <MaterialCommunityIcons
              name="notebook"
              size={60}
              color="#4ea4de"
            />
            <DrawerHead>NoteBeat Excel</DrawerHead>
            <AntDesign name="arrowright" size={30} color="black" />
          </DrawView>
        </TouchableHighlight>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
}

const DrawerHead = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const DrawView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px 0;
`;

const DropContent = styled.View`
  display: flex;
  justify-content: space-evenly;
  background-color: #ebf9fc;
  border-radius: 10px;
  margin: 0 10px 10px 10px;
  padding: 10px;
`;

const DropItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-color: rgba(0, 0, 0, 0.2);
  opacity: 0.7;
  border-bottom-width: 1px;
  margin: 10px 0;
  padding: 10px 0 15px 0;
`;

const DropItemText = styled.Text`
  font-size: 20px;
  margin: 0 10px;
`;
