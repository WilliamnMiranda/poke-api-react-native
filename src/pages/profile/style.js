import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
    flex: 1;
    background-color: ${({color})=> color};
`
export const Figure = styled.View`
    width: 200px;
    height: 140px;
    transform: rotate(10deg);
    border-radius: 30px;
    background-color: rgba(255,255,255,0.2);
    position: absolute;
    top: -14%;
    left: -20%;
`
export const Profile = styled.View`
    height: 45%;
    align-items: center;
`
export const StatusPokemon = styled.ScrollView`
    height: 55%;
    background-color: white;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    padding: 15px;
`
export const ContainerImage = styled.View`
    position: absolute;
    bottom:-20%;
    z-index: 1;
`
export const Image = styled.Image`
    width: 250px;
    height: 250px;
`
export const Identification = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
`
export const Name = styled.Text`
   color: white;
   font-size:${RFValue(45)};
   margin: 0px;
   font-weight: bold;
`

export const Id = styled.Text`
 
`

export const  Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
`
export const  Back = styled.Text`
    color:white;
`
export const  Favorite = styled.Text`
    color:white;
`
export const Types = styled.View`
flex-direction: row;
width: 100%;
padding: 15px;
`
export const Status = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 15px;
    align-items: center;
`
export const NameStatus = styled.Text`
    width: 20%;
    font-size:${RFValue(15)};
    color: rgba(0,0,0,0.3);
`
export const Progress = styled.View`
    height: 2px;
    background-color: rgba(0,0,0,0.9);
    width: 80%;
`
export const StatusProgress = styled.View`
    height: 2px;
    width: ${({tam}) => tam};
    background-color: ${({color})=> color > 50 ? '#6aea6a' : '#ff261b' };
`
export const Value = styled.Text`
    width: 10%;
    text-align: center;
    font-weight: bold;
`
export const InfosStatus = styled.View`
    margin-top: 20%;
    z-index: 1;
`