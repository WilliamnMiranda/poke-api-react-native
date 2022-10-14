import styled from "styled-components/native";

export const Container = styled.View`
    width: 100px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: ${({color})=> color};
    padding: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
`

export const NameStat = styled.Text`
    color:white;
`