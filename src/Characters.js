import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Button,
  Card, CardHeader, CardBody,
  Collapse,
} from 'reactstrap'

import { CHARACTERS, getRarityName, getTypeName, getJobName } from './Consts'

import './Characters.scss'

class Characters extends React.Component {
  state = {
    editingHero: undefined,
  }

  toggleAccordion(accordion) {
    this.setState(state => ({
      editingHero: state.editingHero !== accordion && accordion
    }))
  }

  addHero(name, info) {
    const { onCharacterSelect, } = this.props

    onCharacterSelect(name, info)

    this.toggleAccordion()
  }

  render() {
    const { selectedTeam, } = this.props
    const { editingHero, } = this.state

    return <Card tag="section" className="Characters">
      <CardHeader tag="h4"><FormattedMessage id="Characters.title" /></CardHeader>

      {Object.entries(CHARACTERS).map(([name, infos]) => <React.Fragment key={name}>
        <CardHeader
          className="d-flex align-items-center"
          onClick={() => this.toggleAccordion(name)}>
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
            <FormattedMessage id={`Characters.${editingHero === name ? 'cancel' : 'configure'}`} />
          </Button>
        </CardHeader>
        <CardBody tag={Collapse} isOpen={editingHero === name}>
          <pre>{JSON.stringify(infos, null, 2)}</pre>
          {infos.stats && <div>
            <p><FormattedMessage id="Characters.atk" />{infos.stats.atk}</p>
          </div>}
          <p>{getTypeName(infos)}</p>
          <p>{getJobName(infos)}</p>
          <Button
            type="button"
            color="primary"
            disabled={Boolean(selectedTeam[name]) || Object.keys(selectedTeam).length >= 10}
            onClick={() => this.addHero(name, infos)}>
            <FormattedMessage id="Characters.add" />
          </Button>
        </CardBody>
      </React.Fragment>)}
    </Card>
  }
}

export default Characters
