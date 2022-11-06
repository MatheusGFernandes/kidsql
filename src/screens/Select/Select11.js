import React, { useState } from "react";
import { ScrollView, View, ViewEnd, Text, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Entypo, AntDesign } from "@expo/vector-icons";

import DragAndDrop from "../../components/DragAndDrop";
import { receiveList, dragList } from "../../SelectQuestions/Question4";

const Select11 = ({ navigation }) => {

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [allAnswer, setAllAnswer] = useState(false);

  return (
      <View>
        <Text style={{ marginBottom: 30 }}>4 - Listar os preços e o nome dos produtos (nessa ordem) que apresentem quantidade igual a 2:</Text>
        <DragAndDrop receiveList={receiveList} dragList={dragList} onChange={(allAnswer) => setAllAnswer(allAnswer)} onResponse={(correct) => setCorrectAnswer(correct)}/>
        <ViewEnd>
            <Navigation 
                disabled={!allAnswer}
                reply  ={() => navigation.navigate("Select10")}
                forward={() =>   
                  correctAnswer ? navigation.navigate("Select12") : null
                } 
            />
        </ViewEnd>
      </View>
  )
};

Select11.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Compras", {question: 4})}>
              <AntDesign name="table" size={30} />
            </TouchableOpacity>
          ),
      };
};

export default Select11;