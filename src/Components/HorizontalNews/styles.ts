import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    background-color: #fff;
    width: 220px;
    margin-right: 20px;
    padding: 10px;
    border-radius: 15px;
    border: 1px;
    border-color: rgba(128,128,128,0.6);
`
export const TitleHouse = styled.Text`
    font-family: Montserrat_500Medium;
    padding-top: 5px;
    font-size: 16px;

`
export const Description = styled.Text`
    font-size: 13px;
    font-family: Montserrat_400Regular;
`
export const Image = styled.Image`
    border-radius: 15px;
    width: 100%;
    height: 150px;
`
export const FooterCard = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Price = styled.Text`
    font-size: 18px;
    font-family: Montserrat_700Bold;
    padding-top: 5px;
`
export const BtnArea = styled.TouchableOpacity`

`