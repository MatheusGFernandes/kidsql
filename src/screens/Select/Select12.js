import React, { useState } from "react";
import { ScrollView, View, ViewEnd, Text, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo, AntDesign } from "@expo/vector-icons";

import DragAndDrop from "../../components/DragAndDrop";
import { receiveList, dragList } from "../../SelectQuestions/Question5";

const Select12 = ({ navigation }) => {

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [allAnswer, setAllAnswer] = useState(false);

  return (
      <ScrollView>
        <Text style={{ marginBottom: 30 }}>5 - Listar o nome e preço dos produtos que sejam em “KG” e quantidade maior que 3:</Text>
        <DragAndDrop receiveList={receiveList} dragList={dragList} onChange={(allAnswer) => setAllAnswer(allAnswer)} onResponse={(correct) => setCorrectAnswer(correct)}/>
        <ViewEnd>
            <Navigation 
                disabled={!allAnswer}
                reply  ={() => navigation.navigate("Select11")}
                forward={() =>   
                  correctAnswer ? navigation.navigate("Select13") : null
                } 
            />
        </ViewEnd>
      </ScrollView>
  )
};

Select12.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Compras", {question: 5})}>
              <AntDesign name="table" size={30} />
            </TouchableOpacity>
          ),
      };
};

export default Select12;