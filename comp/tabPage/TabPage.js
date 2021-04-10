import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styled from "styled-components";

import { NativeContext } from "../context/context";
import CardNotes from "../notes/CardNotes";

const CardNotesBody = styled.View``;
const TabBody = styled.View`
  margin-bottom: 30px;
`;

export default function TabPage({ children }) {
  const { notes, setNotes, finalDes } = React.useContext(NativeContext);

  return (
    <>
      <ScrollView>
        <TabBody>
          {notes.length < 1 || finalDes < 1 ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/vector.png")}
                style={{
                  width: 300,
                  height: 300,
                }}
              />
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "700",
                }}
              >
                No Notes Yet
              </Text>
            </View>
          ) : (
            <CardNotesBody>
              <CardNotes 
              navLink="NewView"
              notes={notes} 
              setNotes={setNotes} />
            </CardNotesBody>
          )}
        </TabBody>
      </ScrollView>
    </>
  );
}
