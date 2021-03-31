import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Common from "./Common";
import styled from "styled-components";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

const CommonBody = styled.View`
  background-color: #e6f1f7;
  height: 100%;
`;

const AddNew = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4ea4de;
  width: 75px;
  height: 75px;
  border-radius: 100px;
  padding: 10px;
`;

const AddFeature = styled.View`
  position: absolute;
  right: 20px;
  bottom: 30px;
`;

export default function Page1({ navigation }) {
  return (
    <>
      <CommonBody>
        <Common navigation={navigation} />
        <AddFeature>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor=""
            onPress={() => navigation.navigate("Notes")}
          >
            <AddNew
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.43,
                shadowRadius: 9.51,

                elevation: 5,
              }}
            >
              <Feather name="plus" size={40} color="#fff" />
            </AddNew>
          </TouchableHighlight>
        </AddFeature>
      </CommonBody>
    </>
  );
}
