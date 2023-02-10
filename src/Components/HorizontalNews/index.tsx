import {Container, TitleHouse, Image, Description, FooterCard, Price, BtnArea} from './styles'
import Feather from '@expo/vector-icons/Feather';


interface Data{
    key: Number,
    title: String,
    price: Number,
    linkImage: String
}

export default function HorizontalNews(props){
    return(
        <Container>
            <Image
                source={{uri: `${props.data.linkImage}`}}
            />
            <TitleHouse>{props.data.title}</TitleHouse>
            <Description>{props.data.description}</Description>

            <FooterCard>
                <Price>R$ {props.data.price}</Price>
                <BtnArea>
                    <Feather name='plus-circle' size={24} color='#000'/>
                </BtnArea>
            </FooterCard>

        </Container>
    )
}