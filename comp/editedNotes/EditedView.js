import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";

import { NativeContext } from "../context/context";
import ColorDrop from "../notes/ColorDrop";
import KeyTaskBar from "../notes/KeyTaskBar";

export default function EditedView(props) {
  const {
    image,
    bold,
    bold2,
    italic2,
    italic,
    value2,
    value,
    textDesColor,
    textColor,
  } = React.useContext(NativeContext);

  return (
    <>
      <NoteParent>
        <NoteChild>
          <Text
            style={{
              color: textColor,
              fontWeight: bold ? "700" : "100",
              fontStyle: italic ? "italic" : "normal",
              fontSize: 28,
            }}
          >
            {value}
          </Text>
        </NoteChild>
        <NoteChild>
          <View>
            <Text
              style={{
                color: textDesColor,
                fontStyle: italic2 ? "italic" : "normal",
                fontWeight: bold2 ? "700" : "100",
              }}
            >
              {value2}
            </Text>
          </View>
        </NoteChild>

        <View
          style={{
            alignItems: "center",
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: 300 }}
            />
          )}
        </View>
      </NoteParent>
    </>
  );
}

const NoteParent = styled.View`
  background-color: #fff;
  height: 100%;
`;

const NoteChild = styled.View`
  margin: 20px;
`;

