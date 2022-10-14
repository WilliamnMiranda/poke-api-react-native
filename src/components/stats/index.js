import React from 'react'
import { pokemonTypes } from '../../helpers/typeColor';
import { Container,NameStat } from './style';
const Stat = ({type}) => {
  const [color, setColor] = React.useState('');
  React.useEffect(() => {
    pokemonTypes.forEach((item) => {
      if (item.name === type) {
        setColor(item.color)
      }
    })
  }, [])
  
  return (
    <Container color={color}>
        <NameStat> { type} </NameStat>
    </Container>
  )
}

export default Stat