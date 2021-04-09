import { Character } from '../cards'
import spyIcon from './spy.svg'
import guardIcon from './guard.svg'
import priestIcon from './priest.svg'
import baronIcon from './baron.svg'
import handmaidIcon from './handmaid.svg'
import princeIcon from './prince.svg'
import chancellorIcon from './chancellor.svg'
import kingIcon from './king.svg'
import countessIcon from './countess.svg'
import princessIcon from './princess.svg'

const getIconByCharacter = character => {
  return {
    [Character.SPY]: spyIcon,
    [Character.GUARD]: guardIcon,
    [Character.PRIEST]: priestIcon,
    [Character.BARON]: baronIcon,
    [Character.HANDMAID]: handmaidIcon,
    [Character.PRINCE]: princeIcon,
    [Character.CHANCELLOR]: chancellorIcon,
    [Character.KING]: kingIcon,
    [Character.COUNTESS]: countessIcon,
    [Character.PRINCESS]: princessIcon
  }[character]
}

export default getIconByCharacter
