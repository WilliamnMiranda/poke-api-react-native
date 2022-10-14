import React from 'react'
import { Container, Info, ContainerImage, Name, Image,Types } from './style'
import pokemonServices from '../../services/pokemon'
import { pokemonTypes } from '../../helpers/bgColorsPokemon'
import Stat from '../stats'
const CardPokemon = ({ navigation,url }) => {
  const [pokemon, setPokemon] = React.useState('')
  const [colorType, setColorType] = React.useState('')
  const filterPokemon = async () => {
    const pokemonFilter = await pokemonServices.getStatusByUrl(url)
    const type = pokemonFilter.types[0].type.name
    setPokemon(pokemonFilter)
    pokemonTypes.forEach((item) => {
      if (item.name === type)
        setColorType(item.color)
    })
  }

  React.useEffect(() => {
    filterPokemon()
  }, [])
  return (
    <Container color={colorType} onPress={()=> navigation.navigate('Profile',{pokemon,colorType})}>
      <Info>
        <Name numberOfLines={1}>{pokemon.name}</Name>
        <Types>
          {
            pokemon.types && pokemon.types.map((item,index) => <Stat key={index} type={item.type.name} />)
          }
        </Types>
      </Info>
      <ContainerImage>
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }}
        />
      </ContainerImage>
    </Container>
  )
}

export default CardPokemon