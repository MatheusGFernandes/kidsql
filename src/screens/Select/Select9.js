import React, { useState } from "react";
import { View, ViewEnd, Text, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo, AntDesign} from "@expo/vector-icons";

import DragAndDrop from "../../components/DragAndDrop";
import { receiveList, dragList } from "../../SelectQuestions/Question2";

const Select9 = ({ navigation }) => {

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [allAnswer, setAllAnswer] = useState(false);

  return (
      <View>
        <Text style={{ marginBottom: 30 }}>2 - Liste apenas os Produtos da tabela Compras:</Text>
        <DragAndDrop receiveList={receiveList} dragList={dragList} onChange={(allAnswer) => setAllAnswer(allAnswer)} onResponse={(correct) => setCorrectAnswer(correct)}/>
        <ViewEnd>
            <Navigation 
                disabled={!allAnswer}
                reply  ={() => navigation.navigate("Select8")}
                forward={() =>   
                  correctAnswer ? navigation.navigate("Select10") : null
                } 
            />
        </ViewEnd>
      </View>
  )
};

Select9.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Compras", {question: 2})}>
            <AntDesign name="table" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Select9;