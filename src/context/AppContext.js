import React, { createContext, useState } from 'react';

import { Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Loading } from '../components/Loading';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export const Context = createContext ({})

    const initialStateProgress = { 
        introductionModule: true,
        createModule: false,
        insertModule: false, 
        selectModule: false
    };

    function Provider ({children}){

        const { getItem, setItem } = useAsyncStorage("@Module:KIDSQL");
        const [ progress, setProgress ] = useState(initialStateProgress);

        const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_500Medium });

        if (!fontsLoaded) {
            return <Loading />
        };

        return(
            <Context.Provider value={{ progress, setProgress}}>
                {children}
            </Context.Provider>
        )
};

export default Provider;