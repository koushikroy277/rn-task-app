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

  const [openMenu, setOpenMenu] = React.useState([]);

  const handleMenu = (noteId) => {
    setMenu(!menu);
    setOpenMenu(noteId);
  };

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
                        size={25}
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
                    navLink={props.navLink}
                    noteList={props.notes}
                    setNoteList={props.setNotes}
                    noteListId={u.id}
                    noteListTitle={u.noteTitle}
                    noteListDes={u.noteDes}
                  />
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
  padding: 10px;
`;

const BodyTextTitle = styled.Text`
  font-size: 25px;
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
`;

const CardItemBody = styled.View`
`;

const MenuDropdown = styled.View`
  position: absolute;
  top: 0;
  right: 60px;
  z-index: 1;
`;
