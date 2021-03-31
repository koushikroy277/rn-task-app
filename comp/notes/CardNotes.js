import React from "react";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

import * as rootNavigation from "../rootNavigation";
import { NativeContext } from "../context/context";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CardNotes(props) {
  const { notes, setNotes, textColor, textDesColor, setValue, setValue2 } = React.useContext(
    NativeContext
  );

  const deleteNotes = (noteId) => {
    setNotes(notes.filter((data) => data.id !== noteId));
  };

  return (
    <>
      {notes.map((u, i) => {
        return (
          <CardItemBody key={i}>
            <Card
              containerStyle={{
                borderBottomWidth: 4,
                borderBottomColor: "deepskyblue",
              }}
            >
              <Card.Title>
                <CardTitle>
                  <CardText>Blank Notes</CardText>
                  <TouchableOpacity onPress={() => deleteNotes(u.id)}>
                    <Feather
                      name="trash-2"
                      size={30}
                      color="red"
                      style={{ marginLeft: 150 }}
                    />
                  </TouchableOpacity>
                </CardTitle>
              </Card.Title>
              <Card.Divider />
              <Body>
                <BodyItem>
                  <BodyTextTitle
                    style={{
                      color: u.inputColor,
                      fontStyle: u.inputItalic ? "italic" : "normal",
                      fontWeight: u.inputBold ? "700" : "100",
                    }}
                  >
                    {u.noteTitle}
                  </BodyTextTitle>
                </BodyItem>
                <BodyItem>
                  <BodyTextDes
                    style={{
                      color: u.inputDesColor,
                      fontStyle: u.inputItalic2 ? "italic" : "normal",
                      fontWeight: u.inputBold2 ? "700" : "100",
                    }}
                  >
                    {u.noteDes}
                  </BodyTextDes>
                </BodyItem>
                <BodyItem>
                  {u.inputImage && (
                    <Image
                      source={{ uri: u.inputImage }}
                      style={{ width: 100, height: 100 }}
                    />
                  )}
                </BodyItem>
                <BodyItem>
                  <Button
                    title="Go to"
                    onPress={() => {
                      rootNavigation.navigate("CardView");
                      setValue(u.noteTitle);
                      setValue2(u.noteDes);
                    }}
                  />
                </BodyItem>
              </Body>
            </Card>
          </CardItemBody>
        );
      })}
    </>
  );
}

const Body = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyItem = styled.View`
  margin: 10px;
  padding: 10px;
`;

const BodyTextTitle = styled.Text`
  font-size: 35px;
`;

const BodyTextDes = styled.Text`
  font-size: 20px;
`;

const CardTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const CardText = styled.Text`
  font-size: 18px;
  margin: 10px 0;
  position: relative;
`;

const CardItemBody = styled.View`
  /* border-bottom-width: 3px;
  border-color: #4ea4de; */
`;
