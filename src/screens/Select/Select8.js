import React, { useState, useContext } from "react";
import { View, ViewEnd, TouchableOpacity } from "../../styles/main";
import Navigation from "../../components/Navigation";
import { Context } from "../../context/AppContext";
import { Entypo } from "@expo/vector-icons";

import DragAndDrop from "../../components/DragAndDrop";
import { receiveList, dragList } from "../../SelectQuestions/Question1";

const Select4 = ({ navigation }) => {

  const { font } = useContext(Context);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  return (
      <View style={{alignSelf: "center"}}>
          <DragAndDrop receiveList={receiveList} dragList={dragList} onResponse={(correct) => setCorrectAnswer(correct)}/>
          <ViewEnd>
              <Navigation 
                  reply  ={() => navigation.navigate("Select1")}
                  forward={() =>   
                    correctAnswer ? navigation.navigate("Select2") : null
                  } 
              />
          </ViewEnd>
      </View>
  )
};

Select4.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Entypo name="home" size={30} />
          </TouchableOpacity>
        ),
      };
};

export default Select4;