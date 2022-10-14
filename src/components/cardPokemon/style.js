import styled from 'styled-components/native'
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.TouchableOpacity`
    height: 150px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background-color: ${({color}) => color};
    margin-bottom: 10px;
    border-radius: 20px;
    flex-direction: row;
`

export const Info = styled.View`
    height: 100%;
    width: 50%;
`

export const ContainerImage = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 50%;
`

export const Name = styled.Text`
    font-size:${RFValue(25)};
    color: white;
`
export const Image = styled.Image`
    width: 150px;
    height: 150px;
`

export const Types = styled.View`
    margin-top: 10px;
`