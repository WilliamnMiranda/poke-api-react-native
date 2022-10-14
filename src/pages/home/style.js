import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: rgb(6,11,40);
`
export const ListPokemon = styled.ScrollView`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
`
export const ContainerList = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const ContainerFilter = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const StatFilter = styled.TouchableOpacity`
    background-color: ${({color}) => color};
    flex-grow:1;
    margin-right: 10px;
    margin-bottom: 5px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
`

export const FilterByType = styled.View`
`
export const ContainerFilterByType = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 5px;
`
export const FilterInput = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: "rgba(255,255,255,0.8)"
  })`
    height: 40px;
    background-color: rgba(255,255,255,0.2);
    width: 80%;
    border-width: 1px;
    margin-bottom: 20px;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 5px;
    color:white;
`
export const ButtonFilterByName = styled.TouchableOpacity`
    width: 18%;
    height: 40px;
    background-color:rgba(255,255,255,0.8);
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 7px;
`

export const FilterTypeAndFavorites = styled.View`
    height: 53px;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 5px;
`

export const TextIcon = styled.Text`
color:white;
`
