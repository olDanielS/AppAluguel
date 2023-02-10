import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    background-color: #fff;
    width: 275px;
    margin-right: 20px;
    padding: 10px;
    border-radius: 15px;
    border: 1px;
    border-color: rgba(128,128,128,0.6);
    flex-wrap: nowrap
`
export const TitleHouse = styled.Text`
    font-family: Montserrat_500Medium;
    padding-top: 5px;
    font-size: 10px;

`
export const Description = styled.Text`
    font-size: 12px;
    font-family: Montserrat_400Regular;
    
`
export const Image = styled.Image`
    border-radius: 15px;
    width: 75px;
    height: 75px;
`
export const FooterCard = styled.View`
    flex-direction: column;
    justify-content: center;
    flex: auto;
    padding-left: 10px;
`
export const Price = styled.Text`
    font-size: 18px;
    font-family: Montserrat_700Bold;
`
