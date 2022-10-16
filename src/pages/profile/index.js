import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Stat from '../../components/stats'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Profile,
  StatusPokemon,
  ContainerImage,
  Image,
  Identification,
  Name,
  Id,
  Header,
  Back,
  Favorite,
  Types,
  Figure,
  Status,
  NameStatus,
  Progress,
  StatusProgress,
  Value,
  InfosStatus
} from './style'

const ProfileScreen = ({ navigation, route }) => {
  const { pokemon, colorType } = route.params
  const [formatId, setFormatId] = React.useState('')
  const NamesStats = ['hp', 'Attack', 'Defense', 'Sp.Atk', 'Sp.Def', 'Speed']
  const { color } = route.params
  const formatNumber = (id) => {
    if (pokemon.id < 10)
      setFormatId(`#00${pokemon.id}`)
    else if (pokemon.id >= 10 && id < 100)
      setFormatId(`#0${pokemon.id}`)
    else
      setFormatId(`#${pokemon.id}`)
  }
  React.useEffect(() => {
    formatNumber()
  }, [])
  return (
    <Container color={colorType} colorFilter={color}>
      <Figure />
      <Header>
        <Back>
          <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <Text> <AntDesign name="arrowleft" size={23} /> </Text>
          </TouchableOpacity>
        </Back>
        <Favorite> <AntDesign name="hearto" size={23} /> </Favorite>
      </Header>
      <Profile>
        <Identification>
          <Name> {pokemon.name} </Name>
          <Id> {formatId} </Id>
        </Identification>
        <Types>
          {
            pokemon.types && pokemon.types.map((item, index) => <Stat key={index} type={item.type.name} />)
          }
        </Types>
        <ContainerImage>
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }}
          />
        </ContainerImage>
      </Profile>
      <StatusPokemon>
        <InfosStatus>
          {
            pokemon.stats.map((item, index) => {
              return (
                <Status key={index}>
                  <NameStatus>{NamesStats[index]}</NameStatus>
                  <Value>{item.base_stat}</Value>
                  <Progress>
                    <StatusProgress tam={`${item.base_stat}`} color={item.base_stat} />
                  </Progress>
                </Status>
              )
            })
          }
        </InfosStatus>
      </StatusPokemon>
    </Container>
  )
}

export default ProfileScreen