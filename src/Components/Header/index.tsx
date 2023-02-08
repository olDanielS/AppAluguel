import {View, Text, StyleSheet} from 'react-native';
import Feather from '@expo/vector-icons/Feather';


interface TitleHeader{
    title: String
}

export default function Header({title}: TitleHeader){
   
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Feather name='shopping-bag' size={32}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFF',
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontFamily: "Montserrat_700Bold"
    }
})