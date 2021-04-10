import React from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components";

import Todo from "../todo/Todo";
import { CommonHead } from "../page/Common";

export default function Page2({ navigation }) {
  return (
    <ScrollView>
      <View>
        <CommonHead navigation={navigation} />
      </View>
      <Parent>
        <Todo />
      </Parent>
    </ScrollView>
  );
}

const Parent = styled.View`
  padding: 10px;
  height: 100%;
`;
