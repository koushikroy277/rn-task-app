import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Keyboard,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";

import { NativeContext } from "../context/context";

export default function KeyTaskBar(props) {
  const { image, setImage } = React.useContext(NativeContext);
  const [height, setHeight] = React.useState(-350);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setHeight(-80);
  };

  const _keyboardDidHide = () => {
    setHeight(-350);
  };

  return (
    <>
      <KeyboardParent
        style={{
          position: "absolute",
          bottom: height,
          left: 0,
          right: 0,
        }}
      >
        <KeyboardElem>
          <TouchableOpacity
            onPress={props.handleFunc}
            style={{
              alignItems: "center",
            }}
          >
            <AntDesign name="plussquareo" size={30} color="black" />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              title="Pick an image"
              onPress={pickImage}
            />
            <Button
              title="Remove image"
              onPress={() => setImage(null)}
            />
          </View>
        </KeyboardElem>
      </KeyboardParent>
    </>
  );
}

const KeyboardParent = styled.View``;
const KeyboardElem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
