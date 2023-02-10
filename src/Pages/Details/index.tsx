import { Container, AreaSafe, TitleSections, ImageHouse, SectionsContent, Price, Description } from './styles';

export default function Details({ route }: any) {
    return (
        <Container>
            <AreaSafe>
                <ImageHouse source={{ uri: `${route.params?.linkImage}` }} />
                <SectionsContent>
                    <TitleSections>{route.params?.title}</TitleSections>
                    <Price>R$ {route.params?.price}</Price>
                    <Description>{route.params?.description}</Description>
                </SectionsContent>
            </AreaSafe>
        </Container>
    )
}