import React from 'react'
import {
  Card, CardHeader, CardBody, CardFooter,

  Button,
} from 'reactstrap'

import './MyTeam.scss'
import './Character.scss'

import { withCharacters, TYPES } from './characters.service'

class Character extends React.Component {
  render() {
    const { character, className, } = this.props

    const type = !character.type ? 'empty'
      : character.type & TYPES.LIGHT ? 'light'
        : character.type & TYPES.EARTH ? 'earth'
          : character.type & TYPES.SHADOW ? 'shadow'
            : character.type & TYPES.FIRE ? 'fire'
              : character.type & TYPES.WATER ? 'water'
                : 'undefined'

    console.log(character.type, TYPES)
    // const type = character.id ? character.type : 'empty'

    return <div key={character} className={['Character', type, className].join(' ')}>
      {character.id
        ? <div>{character.id}</div>
        : <div>&#10010;</div>}

    </div>
  }
}

class Team extends React.Component {
  static locations = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

  state = {
    displayedTeam: []
  }

  componentDidMount() {
    this.setState({
      displayedTeam: Team.locations
    })
  }

  componentDidUpdate(prevProps, ) {
    const { team } = this.props
    if (team !== prevProps.team) {
      this.setState({
        displayedTeam: [...team, ...Team.locations.slice(team.length)]
      })
    }
  }

  render() {
    const {
      displayedTeam,
    } = this.state

    return <Card tag="section">
      <CardHeader tag="h4">Equipe</CardHeader>
      <CardBody>
        <div className="Characters">
          {displayedTeam.map(character =>
            <Character key={character.id} character={character} className="w-25 px-1" />)}
        </div>
      </CardBody>
      <CardFooter className="d-flex">
        <Button type="button"
          className="ml-auto"
          onClick={this.clear}>Nettoyer</Button>
      </CardFooter>
    </Card>
  }
}


export default withCharacters(Team)
