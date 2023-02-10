import {Container, TitleHouse, Image, Description, FooterCard, Price, BtnArea} from './styles'
import Feather from '@expo/vector-icons/Feather';

export default function HorizontalNews({data, submit}:any){
    return(
        <Container>
            <Image
                source={{uri: `${data.linkImage}`}}
            />
            <TitleHouse>{data.title}</TitleHouse>
            <Description>{data.description}</Description>

            <FooterCard>
                <Price>R$ {data.price}</Price>
                <BtnArea onPress={() => submit()}>
                    <Feather name='plus-circle' size={24} color='#000'/>
                </BtnArea>
            </FooterCard>

        </Container>
    )
}