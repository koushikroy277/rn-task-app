import React from "react";
import { Text } from "react-native";
import * as rootNavigation from "../rootNavigation";

export const NativeContext = React.createContext([]);

export default function Context(props) {
  const [notes, setNotes] = React.useState([]);
  const [todoList, setTodoList] = React.useState([]);
  const [editNotes, setEditNotes] = React.useState([]);
  const [textColor, setTextColor] = React.useState([]);
  const [textDesColor, setTextDesColor] = React.useState([]);
  const [bold, setBold] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [bold2, setBold2] = React.useState(false);
  const [italic, setItalic] = React.useState(false);
  const [italic2, setItalic2] = React.useState(false);
  const [todo, setTodo] = React.useState("");
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [inputDes, setInputDes] = React.useState("");
  const [todoMatch, setTodoMatch] = React.useState("");
  const [notesTitle, setNotesTitle] = React.useState("");

  const colorList = [
    "#e69177",
    "#cc231b",
    "#610a07",
    "#0743f5",
    "#079ef5",
    "#07edf5",
    "#a0f285",
    "#07f517",
    "#3ea61c",
    "#04570a",
    "#c6fc03",
    "#fff30a",
    "#e89505",
    "#ff96ed",
    "#d977e6",
    "#94187f",
    "#580563",
    "#593391",
  ];

  const notesInput = (e) => {
    setNotesTitle(e);
  };

  const notesDesInput = (e) => {
    setInputDes(e);
  };

  const handleAdd = () => {
    if (notesTitle === "" || inputDes === "") return;

    setNotes((current) => [
      ...current,
      {
        noteTitle: notesTitle,
        noteDes: inputDes,
        id: Math.random(),
        inputColor: textColor,
        inputDesColor: textDesColor,
        inputImage: image,
        inputItalic: italic,
        inputItalic2: italic2,
        inputBold: bold,
        inputBold2: bold2,
      },
    ]);
    setMenu(false);
    setImage(null);
    setInputDes("");
    setNotesTitle("");
    setTextColor("#000");
    setTextDesColor("#000");
    rootNavigation.navigate("Home");
  };


  const handleEdit = () => {
    setEditNotes((current) => [
      ...current,
      {
        noteTitle: value,
        noteDes: value2,
        id: Math.random(),
        inputColor: textColor,
        inputDesColor: textDesColor,
        inputImage: image,
        inputItalic: italic,
        inputItalic2: italic2,
        inputBold: bold,
        inputBold2: bold2,
        editedTitle: value,
        editedDes: value2,
      },
    ]);
    setImage(null);
    setMenu(false);
    setInputDes("");
    setNotesTitle("");
    setTextColor("#000");
    setTextDesColor("#000");
    rootNavigation.navigate("Home");
  };

  const handleTodo = () => {
    setTodoMatch(todo);

    if (todo === "") return;
    if (todoMatch === todo) return;

    setTodoList((listTodo) => [
      ...listTodo,
      {
        todoTitle: todo,
        todoId: Math.random(),
        todoComplete: false,
      }
    ])

    setTodo("");

  }

  return (
    <NativeContext.Provider
      value={{
        bold,
        todo,
        setTodo,
        todoList, 
        todoMatch,
        setTodoList,
        handleTodo,
        setBold,
        image,
        setImage,
        notes,
        setNotes,
        menu,
        setMenu,
        bold2,
        setBold2,
        value,
        setValue,
        value2,
        setValue2,
        italic,
        setItalic,
        italic2,
        setItalic2,
        handleAdd,
        handleEdit,
        inputDes,
        colorList,
        notesTitle,
        textColor,
        setTextColor,
        editNotes,
        setEditNotes,
        notesInput,
        notesDesInput,
        textDesColor,
        setTextDesColor,
      }}
    >
      {props.children}
    </NativeContext.Provider>
  );
}
