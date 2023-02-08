import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import Details from "./Details";

export default function Routes(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{
        }}>
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    )  
}