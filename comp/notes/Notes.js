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
import { FontAwesome } from "@expo/vector-icons";

import { NativeContext } from "../context/context";
import ColorDrop from "./ColorDrop";
import KeyTaskBar from "./KeyTaskBar";

export default function Notes({ navigation }) {
  const {
    setImage,
    notes,
    image,
    bold,
    bold2,
    italic2,
    italic,
    inputDes,
    setBold,
    handleAdd,
    setBold2,
    setItalic2,
    textColor,
    notesInput,
    notesTitle,
    textDesColor,
    setTextDesColor,
    setItalic,
    setTextColor,
    notesDesInput,
  } = React.useContext(NativeContext);

  const [colorDrop, setColorDrop] = React.useState(false);
  const [colorDropSec, setColorDropSec] = React.useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
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

          <NoteChild>
            <View
              style={{
                alignItems: "center",
              }}
            >
              {image && (
                <>
                  <TouchableOpacity
                    onPress={() => setImage(null)}
                    style={{
                      position: "relative",
                      left: 120,
                      top: 0,
                      margin: 10,
                    }}
                  >
                    <FontAwesome name="remove" size={30} color="black" />
                  </TouchableOpacity>
                  <Image
                    source={{ uri: image }}
                    style={{ width: 250, height: 250 }}
                  />
                </>
              )}
            </View>
          </NoteChild>
        </NoteParent>
      </ScrollView>

      {/* Task Bar */}
      <View>
        <KeyTaskBar handleFunc={handleAdd} initHeight={10} showHeight={0} />
      </View>
    </View>
  );
}

const NoteParent = styled.View`
  margin: 5px;
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
    fontSize: 18,
    paddingVertical: 20,
    marginTop: 10,
  },
});
