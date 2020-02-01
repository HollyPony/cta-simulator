import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Button,
  Card, CardHeader, CardBody,
  Collapse,
} from 'reactstrap'

import { CHARACTERS, getRarityName, getTypeName, getJobName } from './Consts'

import Stats from './Components/Stats'

import './Characters.scss'

class Characters extends React.Component {
  state = {}

  toggleAccordion(name, infos) {
    this.setState(state => ({
      [name]: {
        ...infos,
        stars: 1,
        awakens: 0,
        open: state[name] ? !state[name].open : true,
      }
    }))
  }

  addHero(name, info) {
    const { onCharacterSelect, } = this.props

    onCharacterSelect(name, info)

    this.setState({ [name]: undefined, })
  }

  addStar = (name) => this.setState(state => ({
    [name]: {
      ...state[name],
      stars: state[name].stars < 7 ? state[name].stars + 1 : 7,
    }
  }))

  removeStar = (name) => this.setState(state => ({
    [name]: {
      ...state[name],
      stars: state[name].stars > 0 ? state[name].stars - 1 : 0,
    }
  }))

  awake = (name) => this.setState(state => ({
    [name]: {
      ...state[name],
      awakens: state[name].awakens < state[name].stars ? state[name].awakens + 1 : state[name].awakens,
    }
  }))

  sleep = (name) => this.setState(state => ({
    [name]: {
      ...state[name],
      awakens: state[name].awakens > 0 ? state[name].awakens - 1 : 0,
    }
  }))

  mapStar = render =>
    Array.from({ length: 7 }, (_, id) => id + 1).map(render)

  render() {
    const { selectedTeam, } = this.props

    return <Card tag="section" className="Characters">
      <CardHeader tag="h4"><FormattedMessage id="Characters.title" /></CardHeader>

      {Object.entries(CHARACTERS).map(([name, infos]) => <React.Fragment key={name}>
        <CardHeader
          className="d-flex align-items-center"
          onClick={() => this.toggleAccordion(name, infos)}>
          <div className={`mr-2 character-picture ${getTypeName(infos)}`}>
            <img src={`/assets/characters/${name}.png`} alt={'add'} />
          </div>
          <span className="mr-2">
            <FormattedMessage id={`hero.${name}`} />
          </span>
          <div>
            <span className="align-middle">{getRarityName(infos)}</span>
          </div>
          <Button
            className="ml-auto"
            color="info">
            <FormattedMessage id={`Characters.${this.state[name] && this.state[name].open ? 'close' : 'configure'}`} />
          </Button>
        </CardHeader>
        <CardBody tag={Collapse} isOpen={this.state[name] && this.state[name].open}>
          {this.state[name] && <div>
            <div className="stars d-flex">
              {this.mapStar((id) => <span key={id}
                className={`star ${(id <= this.state[name].stars)
                  ? (id <= this.state[name].awakens) ? 'awake' : 'normal'
                  : ''}`} />)}
            </div>
            <button onClick={() => this.removeStar(name)}>remove star</button>
            <button onClick={() => this.addStar(name)}>add star</button>
            <button onClick={() => this.awake(name)}>awake</button>
            <button onClick={() => this.sleep(name)}>sleep</button>

            <Stats hero={this.state[name]} />

            <p>{getTypeName(infos)}</p>
            <p>{getJobName(infos)}</p>
            <Button
              type="button"
              color="primary"
              disabled={Boolean(selectedTeam[name]) || Object.keys(selectedTeam).length >= 10}
              onClick={() => this.addHero(name, infos)}>
              <FormattedMessage id="Characters.add" />
            </Button>
          </div>}
        </CardBody>
      </React.Fragment>)
      }
    </Card >
  }
}

export default Characters
