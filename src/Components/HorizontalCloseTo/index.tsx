import {Container, TitleHouse, Image, Description, FooterCard, Price, BtnArea} from './styles'

export default function HorizontalCloseto({data}:any){
    return(
        <Container>
            <Image
                source={{uri: `${data.linkImage}`}}
            />
            <FooterCard>
            <Description>{data.description}</Description>
                <Price>R$ {data.price}</Price>
            </FooterCard>

        </Container>
    )
}