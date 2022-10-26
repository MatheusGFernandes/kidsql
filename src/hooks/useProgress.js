import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const useProgress = (progress, setProgress) => {

    const { getItem, setItem } = useAsyncStorage("@Module:KIDSQL");

    const saveProgress = async (module) => {
                
        const newProgress = { ...progress, [module]: true }
        await setItem(JSON.stringify(newProgress));

        setProgress(newProgress);
    
    }
    
    const getProgress = async () => {
    
        const progress = await getItem();
        const previousProgress = progress ? JSON.parse(progress) : {};

        return previousProgress;

    }

    return { saveProgress, getProgress }

};

export default useProgress;