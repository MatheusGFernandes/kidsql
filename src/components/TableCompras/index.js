import React from "react";
import { Text, View, TouchableOpacity } from "../../styles/main";
import { Compras, ComprasQ2, ComprasQ3, ComprasQ4, ComprasQ5 } from "../Tables/TablesSelect";
import { Entypo } from "@expo/vector-icons";

const TableCompras = ({ navigation }) => {

    const question = navigation.getParam('question');

    return (
        <View>
            <Text style={{ justifyContent: "center" }}>Tabela Compras</Text>
            <Compras />
            {question !== undefined ? <Text style={{ justifyContent: "center" }}>Resultado esperado da questão:</Text> : null}
                { question === 1 ? <Compras/> : 
                    question === 2 ? <ComprasQ2/> :
                        question === 3 ? <ComprasQ3/> :
                            question === 4 ? <ComprasQ4/> :
                                question === 5 ? <ComprasQ5/> : null}
        </View>
    )
};

TableCompras.navigationOptions = ({ navigation }) => {

    return {
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="reply" size={30}/>
          </TouchableOpacity>
        ),
      };
};

export default TableCompras;