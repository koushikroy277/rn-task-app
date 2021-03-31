import React from "react";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import * as rootNavigation from "../rootNavigation";
import { NativeContext } from "../context/context";
import CardNotes from "../notes/CardNotes";

export default function NewCards(props) {
  const { editNotes, setEditNotes } = React.useContext(
    NativeContext
  );

  return (
    <>
      <View>
        <CardNotes 
        notes={editNotes}
        setNotes={setEditNotes} />
      </View>
    </>
  );
}
