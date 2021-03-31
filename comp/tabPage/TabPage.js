import React from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components";

import { NativeContext } from "../context/context";
import CardNotes from "../notes/CardNotes";

const CardNotesBody = styled.View`
`;
const TabBody = styled.View`
  margin-bottom: 30px;
`;

export default function TabPage({ children }) {
  const { notes, finalDes } = React.useContext(NativeContext);

  return (
    <>
      <ScrollView>
        <TabBody>
          {notes.length < 1 || finalDes < 1 ? null : (
            <CardNotesBody>
              <CardNotes />
            </CardNotesBody>
          )}
        </TabBody>
      </ScrollView>
    </>
  );
}
