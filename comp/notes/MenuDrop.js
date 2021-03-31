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
            <Feather name="trash-2" size={30} color="red" />
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
            <Feather name="edit-3" size={30} color="black" />
          </ChildMenu>
        </TouchableOpacity>
        <TouchableOpacity>
          <ChildMenu>
            <MenuText>View</MenuText>
            <Feather name="edit-3" size={30} color="black" />
          </ChildMenu>
        </TouchableOpacity>
      </ParentMenu>
    </>
  );
}

const ParentMenu = styled.View`
  display: flex;
  background-color: #edf7f7;
  width: 200px;
  height: 100%;
`;

const ChildMenu = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 10px;
`;

const MenuText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;
