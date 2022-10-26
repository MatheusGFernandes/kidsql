import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { View, ViewOptions, Text, TouchableOpacity } from './style';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const CheckBox = ({ verify, options, onChange }) => {
    
    const { getItem, setItem } = useAsyncStorage("@Questions:KIDSQL");
    const [selected, setSelect] = useState([]);
    const [answer, setAnswer]   = useState(0);

    const fetchAnswer = async () => {

        const response = await getItem();
        const previousAnswer = response ? JSON.parse(response) : [];
        const teste = previousAnswer[verify];
        const teste2 = teste?.alternative ?? 0;
        
        if (response != null) {
                
            setAnswer(teste2);
        }
        
        return answer;
    }

    useEffect(() => {
        fetchAnswer();
        // answer !== 0 ? pick(answer) : undefined
    } , []); // Deixa selecionada a alternativa que o usuário respondeu anteriormente

    useEffect(() => {
        
        if (answer) {
            pick(answer);
        };

    }, [answer])

    useEffect(() => onChange(selected), [selected]);

    function pick(id) {
        let index = selected.findIndex((index) => index === id);
        let selecteds = [...selected];

        if(index !== -1) {
            selecteds.splice(index, 1);
        } else {
            selecteds = [id];
        }

        setSelect(selecteds);
    }

    return (
        <View>
            {options.map((alternative, id) => (
                <ViewOptions key={id}>
                    <Text>
                        <TouchableOpacity onPress={() => pick(alternative.id)}>
                            { selected.findIndex(i => i === alternative.id) !== -1 ? 
                                <Ionicons name="checkbox" size={22} color='#5b1d99'/> :
                                <MaterialCommunityIcons name="checkbox-blank-outline" size={22} color='#5b1d99'/>}
                        </TouchableOpacity> {alternative.text} {answer}</Text>
                </ViewOptions>
            ))}
        </View>
    );
};

export default CheckBox;