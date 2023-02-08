import {View, Text, SafeAreaView} from 'react-native';
import { Container } from './styles';

import Header from '../../Components/Header';

export default function Home(){
    return(
        <SafeAreaView>
            <Header title={'Alugue'}/>
            <Container>
                <Text>Teste</Text>
            </Container>
        </SafeAreaView>
    )
}