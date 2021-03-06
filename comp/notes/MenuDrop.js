import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components";
import { Entypo, Feather } from "@expo/vector-icons";

import * as rootNavigation from "../rootNavigation";
import { NativeContext } from "../context/context";

export default function MenuDrop(props) {
  const {
    textColor,
    textDesColor,
    setValue,
    setValue2,
    menu,
    setMenu,
  } = React.useContext(NativeContext);

  const deleteNotes = (noteId) => {
    props.setNoteList(props.noteList.filter((data) => data.id !== noteId));
    setMenu(false);
  };

  return (
    <>
      <ParentMenu>
        <TouchableOpacity onPress={() => deleteNotes(props.noteListId)}>
          <ChildMenu>
            <MenuText>Delete</MenuText>
            <Feather name="trash-2" size={25} color="red" />
          </ChildMenu>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          rootNavigation.navigate(props.navLink);
          setValue(props.noteListTitle);
          setValue2(props.noteListDes);
        }}>
          <ChildMenu>
            <MenuText>View</MenuText>
            <Entypo name="eye" size={25} color="black" />
          </ChildMenu>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => {
            rootNavigation.navigate("CardView");
            setValue(props.noteListTitle);
            setValue2(props.noteListDes);
          }}
        >
          <ChildMenu>
            <MenuText>Edit</MenuText>
            <Feather name="edit-3" size={25} color="black" />
          </ChildMenu>
        </TouchableOpacity>
        
      </ParentMenu>
    </>
  );
}

const ParentMenu = styled.View`
  background-color: #fff;
  elevation: 10;
  width: 160px;
`;

const ChildMenu = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 0;
`;

const MenuText = styled.Text`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 700;
`;
