import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Pages/routes";
import { useFonts,Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import {ActivityIndicator} from 'react-native';
import { StatusBar } from "react-native";

export default function App(){
  let [fonts] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
})

  if(!fonts){
      return false;
    }
  
  return(
    <>
    <StatusBar backgroundColor={'#121214'} barStyle='light-content'/>
    <NavigationContainer>
        <Routes/>
    </NavigationContainer>
    </>
  )
}