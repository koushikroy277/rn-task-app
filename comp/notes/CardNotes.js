import React from "react";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Feather } from "@expo/vector-icons";

import * as rootNavigation from "../rootNavigation";
import { NativeContext } from "../context/context";
import MenuDrop from "./MenuDrop";

export default function CardNotes(props) {
  const {
    textColor,
    textDesColor,
    setValue,
    setValue2,
    menu,
    setMenu,
  } = React.useContext(NativeContext);

  const [ openMenu, setOpenMenu ] = React.useState([]);

  const handleMenu = (noteId) => {
    setMenu(!menu);
    setOpenMenu(noteId);
  }

  return (
    <>
      {props.notes.map((u, i) => {
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
                  <TouchableOpacity onPress={() => handleMenu(u.id)}>
                    <Text />
                    <View style={{ marginLeft: 150, marginTop: -10 }}>
                      <Entypo
                        name="dots-three-vertical"
                        size={30}
                        color="black"
                      />
                    </View>
                  </TouchableOpacity>
                </CardTitle>
              </Card.Title>
              <Card.Divider />
              {menu && u.id === openMenu && (
              <MenuDropdown>
                <MenuDrop
                noteList={props.notes}
                setNoteList={props.setNotes} 
                noteListId={u.id}
                noteListTitle={u.noteTitle}
                noteListDes={u.noteDes} />
              </MenuDropdown>
            )}
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
  justify-content: space-between;
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

const MenuDropdown = styled.View`
  position: absolute;
  top: 40px;
  right: 0px;
  padding: 10px;
  z-index: 1;
`;
