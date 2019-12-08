// auth-service.jsx
import React from 'react';

const { createContext, } = React

export const CharactersContext = createContext(null);

export const CharactersConsumer = CharactersContext.Consumer

export const CharactersProvider = ({ children, props = {} }) => <CharactersContext.Provider value={{
  getCharacters,
  ...props
}}>
  {children}
</CharactersContext.Provider>

export const withCharacters = WrappedComponent => props => <CharactersContext.Consumer>{CharactersService =>
  <WrappedComponent CharactersService={CharactersService} {...props} />
}</CharactersContext.Consumer>

export const TYPES = {
  LIGHT: 1,
  EARTH: 2,
  SHADOW: 4,
  FIRE: 8,
  WATER: 16,
}

const getCharacters = () => [
  { id: 1, name: 'Alda', type: TYPES.LIGHT, },
  { id: 2, name: 'Angelica', type: TYPES.EARTH, },
  { id: 3, name: 'Arcana', type: TYPES.SHADOW, },
  { id: 4, name: 'Atlantus', type: TYPES.FIRE, },
  { id: 5, name: 'Bat', type: TYPES.WATER, },
  { id: 6, name: 'Big Eye', type: TYPES.LIGHT, },
  { id: 7, name: 'Black Beard', type: TYPES.LIGHT, },
  { id: 8, name: 'Blue Fish', type: TYPES.LIGHT, },
  { id: 9, name: 'Bugonaut Archer', type: TYPES.LIGHT, },
  { id: 10, name: 'Bugonaut Fighter', type: TYPES.LIGHT, },
  { id: 11, name: 'Bugonaut Giant', type: TYPES.LIGHT, },
  { id: 12, name: 'Bugonaut Spear', type: TYPES.LIGHT, },
  { id: 13, name: 'Chaos', type: TYPES.LIGHT, },
  { id: 14, name: 'Dark Hunter', type: TYPES.LIGHT, },
  { id: 15, name: 'Dark Knight', type: TYPES.LIGHT, },
  { id: 16, name: 'Dark Wolf', type: TYPES.LIGHT, },
  { id: 17, name: 'Fire Monk', type: TYPES.LIGHT, },
  { id: 18, name: 'Furiosa', type: TYPES.LIGHT, },
  { id: 19, name: 'Gladiator', type: TYPES.LIGHT, },
  { id: 20, name: 'Goddess', type: TYPES.LIGHT, },
  { id: 21, name: 'Gold Knight', type: TYPES.LIGHT, },
  { id: 22, name: 'Green Faery', type: TYPES.LIGHT },
  { id: 23, name: 'Groovine', type: TYPES.LIGHT, },
  { id: 24, name: 'Hikari', type: TYPES.LIGHT, },
  { id: 25, name: 'Ice Cube', type: TYPES.LIGHT, },
]
