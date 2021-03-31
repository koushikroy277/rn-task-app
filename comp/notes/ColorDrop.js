import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign, Ionicons, Feather, FontAwesome } from "@expo/vector-icons";

import styled from "styled-components";
import { NativeContext } from "../context/context";

export default function ColorDrop({ drop, setDrop, textColor, setTextColor, setItalic, italic, setBold, bold }) {
  
  const { colorList, setNotes, notes } = React.useContext(NativeContext);

  const [title, setTitle] = React.useState("");

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableHighlight
          onPress={() => setDrop(!drop)}
          underlayColor=""
          activeOpacity={0.3}
        >
          <Ionicons name="color-palette-outline" size={30} color="black" />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setItalic(!italic)} 
          underlayColor=""
          activeOpacity={0.3}>
          <Feather
            name="italic"
            size={30}
            color="black"
            style={{ marginHorizontal: 10 }}
          />
        </TouchableHighlight>
        <TouchableHighlight
        onPress={() => setBold(!bold)}
        underlayColor=""
        activeOpacity={0.3}>
          <FontAwesome
            name="bold"
            size={30}
            color="black"
            style={{ marginHorizontal: 5 }}
          />
        </TouchableHighlight>
      </View>

      {drop ? (
        <NoteColor>
          <ScrollView>
            {colorList.map((color, index) => (
              <TouchableHighlight
                key={index}
                underlayColor=""
                activeOpacity={0.3}
                onPress={() => setTextColor(color)}
              >
                <NoteColorItem>
                  <View
                    style={{
                      backgroundColor: color,
                      height: 40,
                      width: 40,
                      borderRadius: 10,
                    }}
                  />
                </NoteColorItem>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </NoteColor>
      ) : null}
    </>
  );
}
const NoteTitle = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;

const NoteColor = styled.View`
  display: flex;
  background-color: #f5fdff;
  overflow: scroll;
  position: absolute;
  top: 25px;
  left: 100px;
  z-index: 1;
  height: 300px;
  margin: 10px;
  padding: 20px;
`;

const NoteColorItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 50px;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
`;

const NoteColorText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin-top: 10px;
  padding-right: 10px;
`;
