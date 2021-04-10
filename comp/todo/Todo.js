import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { NativeContext } from "../context/context";

export default function Todo() {
  const {
    todo,
    setTodo,
    todoList,
    setTodoList,
    handleTodo,
    todoMatch,
  } = React.useContext(NativeContext);

  const [checkId, setCheckId] = React.useState("");

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((d) => d.todoId !== id));
  };

  const handleClick = (id) => {
    let updatedTodos = todoList.map((u) => {
      if (u.todoId === id) {
        u.todoComplete = !u.todoComplete;
      }
      return u;
    });

    setTodoList(updatedTodos);
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TodoParent>
          {todoList.length < 1 ? (
            <ListEmptyItem>
              <ListText>No Tasks Yet</ListText>
            </ListEmptyItem>
          ) : (
            <View>
              {todoList.map((d, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => handleClick(d.todoId)}
                  activeOpacity={0.4}
                >
                  <LinearGradient
                    colors={
                      d.todoComplete
                        ? ["#8ccbed", "#73a3f0"]
                        : ["#45abf5", "#0c68f0"]
                    }
                    style={{ marginBottom: 10 }}
                  >
                    <TodoChild>
                      <TodoText>{d.todoTitle}</TodoText>
                      <TouchableOpacity onPress={() => deleteTodo(d.todoId)}>
                        <MaterialIcons
                          name="delete-outline"
                          size={30}
                          color="#fff"
                        />
                      </TouchableOpacity>
                    </TodoChild>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <TodoInput>
            <TextInput
              style={styles.input}
              placeholder="Todo..."
              value={todo}
              onChangeText={(e) => setTodo(e)}
              multiline={true}
              autoFocus={true}
            />
            <TouchableOpacity onPress={handleTodo} activeOpacity={0.7}>
              <ButtonContainer>
                <BtnText>Add Task</BtnText>
                <Ionicons name="add" size={24} color="#4ea4de" />
              </ButtonContainer>
            </TouchableOpacity>
          </TodoInput>
        </TodoParent>
      </ScrollView>
    </>
  );
}

const TodoParent = styled.View`
  margin-top: 10px;
  padding: 0 20px;
`;

const TodoInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const TodoChild = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
`;

const TodoText = styled.Text`
  font-size: 18px;
  color: #fff;
  width: 240px;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 15px 5px;
  margin-top: 10px;
`;

const BtnText = styled.Text`
  font-size: 16px;
  color: #4ea4de;
`;

const ListEmptyItem = styled.View`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 10px 0;
`;

const ListText = styled.Text`
  font-size: 18px;
  opacity: 0.5;
`;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(0, 0, 0, .05)",
    width: 190,
    fontSize: 16,
    padding: 15,
    marginTop: 10,
  },
});
