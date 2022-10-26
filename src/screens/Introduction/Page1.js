import React, { useCallback, useEffect, useContext } from 'react';
import { View, Modulo, TextModulo } from '../../styles/main';
import { useFocusEffect } from '@react-navigation/native';
import { Context } from "../../context/AppContext";
import useProgress from '../../hooks/useProgress';

import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Loading } from '../../components/Loading';

import AsyncStorage from '@react-native-async-storage/async-storage';
import _isEmpty from 'lodash/isEmpty';

const STEPS = [
    {moduleName: "Introdução", screen: "Page2", progressName: "introductionModule", id: 1},
    {moduleName: "Create", screen: "Create1", progressName: "createModule", id: 2},
    {moduleName: "Insert", screen: "Insert1", progressName: "insertModule", id: 3},
    {moduleName: "Select", screen: "Select1", progressName: "selectModule", id: 4}
];

const HomeScreen = ({ navigation }) => {

    const { font, progress, setProgress } = useContext(Context);
    const { getProgress } = useProgress(progress, setProgress)

    useEffect(() => {
        navigation.addListener('didFocus', () => { // Todas vez que essa tela estiver em foco (ou seja, for chamada) recarrega os blogs existentes
            fetchQuestions();
        });

    }, []);

    useEffect(() => {

        const modules = async () => {
            
            const asyncProgress = await getProgress();
        
            if (!_isEmpty(asyncProgress)) {

                setProgress(asyncProgress);
            }
        }

        modules();
        
    }, []);

    async function fetchQuestions () {
        const response = await AsyncStorage.getItem("@Questions:KIDSQL");
        // const data = response ? JSON.parse(response) : [];
        // console.log(data);

    }

    return (
        <View>
            {STEPS.map((step) => {
                return (
                    <Modulo
                        disabled={!progress[step.progressName]}
                        key={step.id}
                        onPress={() => progress[step.progressName] ? navigation.navigate(step.screen) : null} 
                    >
                        <TextModulo>{step.moduleName}</TextModulo>
                    </Modulo> 
                );
            })}            
        </View>
    )
};

export default HomeScreen;