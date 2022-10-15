import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Container,
  ListPokemon,
  ContainerList,
  ContainerFilter,
  StatFilter,
  ContainerFilterByType,
  FilterInput,
  Input,
  ButtonFilterByName,
  FilterTypeAndFavorites,
  TextIcon
} from './style'
import CardPokemon from '../../components/cardPokemon'
import pokemonServices from '../../services/pokemon'
import { pokemonTypes } from '../../helpers/typeColor'
import CardPokemonFilter from '../../components/cardPokemon/pokemonFilter'
const HomeScreen = ({ navigation }) => {
  const [pokemons, setPokemons] = React.useState([]);
  const [filterByType, setFilterByType] = React.useState(false);
  const [filterByNameOrId, setFilterByNameOrId] = React.useState('');
  const [pokemonsFilter, setPokemonsFilter] = React.useState('')
  const getPokemons = async () => {
    const pokemons = await pokemonServices.getAll();
    setPokemons(pokemons)
  }
  const getPokemonsFilter = async () => {
    if (filterByNameOrId === '') {
      setPokemonsFilter('')
      return
    }
    const pokemons = await pokemonServices.getByIdOrName(filterByNameOrId)
    setPokemonsFilter([pokemons])
  }

  const getPokemonByType = async (type) => {
    const pokemons = await pokemonServices.getByType(type)
    const urlsPokemons = pokemons.map((item) => item.pokemon)
    setPokemonsFilter(urlsPokemons)
  }
  React.useEffect(() => {
    getPokemons()
  }, [])
  return (
    <Container>
      <ListPokemon>
        <ContainerFilter>
          <FilterInput>
            <Input
              onChangeText={setFilterByNameOrId}
              value={filterByNameOrId}
              placeholder="Digite o nome do pokemon"
            />
            <ButtonFilterByName onPress={() => getPokemonsFilter()}>
              <Text> Buscar </Text>
            </ButtonFilterByName>
          </FilterInput>
          <FilterTypeAndFavorites>
            <TouchableOpacity onPress={()=> setPokemonsFilter('')}>
              <TextIcon> <AntDesign name="home" color='white' size={23} /> Inicio </TextIcon>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilterByType(!filterByType)}>
              <TextIcon> <AntDesign name="filter" color='white' size={23} /> Filter </TextIcon>
            </TouchableOpacity>
          </FilterTypeAndFavorites>
          {filterByType &&
            <ContainerFilterByType>
              {
                pokemonTypes.map((item, index) => {
                  return (
                    <StatFilter
                      key={index}
                      color={item.color}
                      onPress={() => getPokemonByType(item.name)}
                    >
                      <Text>{item.name}</Text>
                    </StatFilter>
                  )
                })
              }
            </ContainerFilterByType>
          }
        </ContainerFilter>
        <ContainerList>
          {
            pokemonsFilter === '' ? pokemons.map(({ name, url }) => <CardPokemon key={url} url={url} navigation={navigation} />) :
              pokemonsFilter.length > 1 ? pokemonsFilter.map(({ url, name }) => <CardPokemon key={url + name} url={url} navigation={navigation} />) :
                pokemonsFilter.map((pokemon) => <CardPokemonFilter key={pokemon.id} pokemon={pokemon} navigation={navigation} />)

          }
        </ContainerList>
      </ListPokemon>
    </Container>
  )
}

export default HomeScreen