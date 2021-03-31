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
import ColorDrop from "./ColorDrop";
import KeyTaskBar from "./KeyTaskBar";

export default function notes({ navigation }) {
  const {
    msg, notes,
    image, bold,
    bold2, italic2,
    italic, inputDes,
    setBold, handleAdd,
    setBold2, setItalic2,
    textColor, notesInput,
    notesTitle, textDesColor,
    setTextDesColor, setItalic,
    setTextColor, notesDesInput,
  } = React.useContext(NativeContext);

  const [colorDrop, setColorDrop] = React.useState(false);
  const [colorDropSec, setColorDropSec] = React.useState(false);

  return (
    <>
      <NoteParent>
        {/* Input Fields */}
        <NoteChild>
          <NoteChildHead>
            <NoteTitle>Title</NoteTitle>
            <ColorDrop
              textColor={textColor}
              setTextColor={setTextColor}
              drop={colorDrop}
              setDrop={setColorDrop}
              italic={italic}
              setItalic={setItalic}
              bold={bold}
              setBold={setBold}
            />
          </NoteChildHead>
          <TextInput
            style={[
              styles.noteInput,
              {
                color: textColor.toString(),
                fontWeight: bold ? "700" : "100",
                fontStyle: italic ? "italic" : "normal",
                fontSize: 28,
              },
            ]}
            placeholder="Write Title..."
            value={notesTitle.toString()}
            onChangeText={notesInput}
            autoCorrect={true}
            autoFocus={true}
          />
        </NoteChild>
        <NoteChild>
          <NoteChildHead>
            <NoteTitle>Description</NoteTitle>
            <ColorDrop
              textColor={textDesColor}
              setTextColor={setTextDesColor}
              drop={colorDropSec}
              setDrop={setColorDropSec}
              italic={italic2}
              setItalic={setItalic2}
              bold={bold2}
              setBold={setBold2}
            />
          </NoteChildHead>
          <View>
            <TextInput
              style={[
                styles.noteInput,
                {
                  height: 150,
                  color: textDesColor.toString(),
                  fontStyle: italic2 ? "italic" : "normal",
                  fontWeight: bold2 ? "700" : "100",
                },
              ]}
              placeholder="Write Description..."
              value={inputDes.toString()}
              onChangeText={notesDesInput}
              multiline={true}
              autoCorrect={true}
            />
          </View>
        </NoteChild>

        {/* Task Bar */}
        <View>
          <KeyTaskBar handleFunc={handleAdd} />
        </View>

        <View
          style={{
            alignItems: "center",
          }}
        >
          {image && (
            <Image source={{ uri: image }} style={{ width: '100%', height: 300 }} />
          )}
        </View>

        {/* No Message */}
        <View>{msg && <Text>No Notes</Text>}</View>
      </NoteParent>
    </>
  );
}

const NoteParent = styled.View`
  height: 100%;
  margin: 5px;
  padding: 15px;
`;

const NoteChildHead = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NoteChild = styled.View`
  margin: 10px 20px;
`;

const NoteTitle = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;

const NoteInputTitle = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;

const styles = StyleSheet.create({
  noteInput: {
    width: 280,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, .4)",
    fontSize: 18,
    fontWeight: "700",
    color: "red",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});
