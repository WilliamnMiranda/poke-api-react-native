import React from 'react'
import { Container, Info, ContainerImage, Name, Image,Types } from '../style'
import { pokemonTypes } from '../../../helpers/bgColorsPokemon'
import Stat from '../../stats'
const CardPokemonFilter = ({ navigation,pokemon }) => {
  const [color, setColor] = React.useState('')
  const setColorType = async () => {
      pokemonTypes.forEach((item) => {
          if (item.name === pokemon.types[0].type.name)
              setColor(item.color)
      })
  }

  React.useEffect(() => {
      setColorType()
  }, [])
  return (
    <Container color={color} onPress={()=> navigation.navigate('Profile',{pokemon,color})}>
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

export default CardPokemonFilter