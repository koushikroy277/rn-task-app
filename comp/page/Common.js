import React from "react";
import {
  Button,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

import TabView from "../TabView";
import CardNotes from "../notes/CardNotes";
import { NativeContext } from "../context/context";
import { navigate } from "../rootNavigation";

export default function Common({ navigation }) {
  const { notes, setNotes, finalDes } = React.useContext(NativeContext);

  return (
    <>
      <ScrollView>
        <View
          style={{
            height: "100%",
          }}
        >
          <View>
            <CommonHead navigation={navigation} />
          </View>
          <TabBody>
            <TabView />
          </TabBody>
        </View>
      </ScrollView>
    </>
  );
}

export const CommonHead = ({ navigation }) => {
  return (
    <Head>
      <HeadIcon>
        <Feather
          name="bar-chart-2"
          size={40}
          color="#fff"
          onPress={() => navigation.openDrawer()}
        />
      </HeadIcon>
      <HeadName>NoteItAll</HeadName>
    </Head>
  );
};

const HeadIcon = styled.View`
  opacity: 0.7;
  transform: rotate(79deg);
  position: absolute;
  top: 150px;
  left: 35px;
`;

const Head = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #4ea4de;
  color: #000;
  height: 250px;
  width: 500px;
  margin: -40px 0 30px -10px;
  transform: skewY(10deg);
`;

const HeadName = styled.Text`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  transform: skewY(-10deg);
  position: absolute;
  top: 100px;
  right: 150px;
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
  bottom: -30px;
`;

const AddNewTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

const CardNotesBody = styled.View``;

const TabBody = styled.View`
  margin: 0;
`;
