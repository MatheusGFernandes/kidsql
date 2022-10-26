import { ActivityIndicator } from 'react-native';
import { View } from '../styles/main';

export function Loading() {
  return (
    <View>
        <ActivityIndicator style={{ justifyContent: 'center', alignItems: 'center' }} color={"#0074b4"} size={32}/>
    </View>
  );
}