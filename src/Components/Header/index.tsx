import Feather from '@expo/vector-icons/Feather';
import { Container, Title } from './styles';
import { TouchableOpacity } from 'react-native';

interface TitleHeader{
    title: String
}

export default function Header({title}: TitleHeader){
    return(
        <Container>
            <Title>{title}</Title>
            <TouchableOpacity>
                <Feather name='shopping-bag' size={32}/>
            </TouchableOpacity>
        </Container>
    )
}

