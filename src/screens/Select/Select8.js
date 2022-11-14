import React, { useState } from "react";
import { View, ViewEnd, Text, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo, AntDesign } from "@expo/vector-icons";

import DragAndDrop from "../../components/DragAndDrop";
import { receiveList, dragList } from "../../SelectQuestions/Question1";

const Select8 = ({ navigation }) => {

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [allAnswer, setAllAnswer] = useState(false);

  return (
      <View>
        <Text>1 - Fazer um Select para pegar todas as informações (*) da tabela compras:</Text>
        <Text style={{ marginBottom: 30, fontSize: 10 }}>(Clique e arraste os blocos abaixo da linha para os blocos vazios em cima da linha)</Text>
        <DragAndDrop receiveList={receiveList} dragList={dragList} onChange={(allAnswer) => setAllAnswer(allAnswer)} onResponse={(correct) => setCorrectAnswer(correct)}/>
        <ViewEnd>
            <Navigation 
                disabled={!allAnswer}
                reply  ={() => navigation.navigate("Select7")}
                forward={() =>   
                  correctAnswer ? navigation.navigate("Select9") : null
                } 
            />
        </ViewEnd>
      </View>
  )
};

Select8.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Compras", {question: 1})}>
            <AntDesign name="table" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Select8;