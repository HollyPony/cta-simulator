import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Button,
  Card, CardHeader, CardBody,

  FormGroup, Input, Label,

  Collapse,
} from 'reactstrap'

import { CHARACTERS, TYPES, JOBS, RARITIES, getRarityName, getTypeName, getJobName } from './Consts'

import Stats from './Components/Stats'

import './Characters.scss'



const FilterButton = ({ active, filter, value, name, onClick = () => { }, className, ...props }) =>
  <Button onClick={() => onClick(filter, value)} className={['filterButton', className, name, active ? 'active' : undefined].join(' ')} {...props}>{name}</Button>
const TypeFilterButton = ({ className, ...props }) =>
  <FilterButton filter="type" className={[className, 'type'].join(' ')} {...props} />
const JobFilterButton = ({ className, ...props }) =>
  <FilterButton filter="job" className={[className, 'job'].join(' ')} {...props} />

class Characters extends React.Component {
  state = {
    _filter: {
      type: 0,
      job: 0,
      rarity: 0,
    }
  }

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
    const { onCharacterSelect = { then: () => { } }, } = this.props

    onCharacterSelect(name, info)
      .then(() => this.setState({ [name]: undefined, }))
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

  handleFilter = (type, value) => {
    return (type === 'rarity')
      ? this.setState(state => ({
        _filter: {
          ...state._filter,
          rarity: value
        }
      }))

      : this.setState(state => {
        const filter = state._filter[type]
        const isActive = Boolean(value & filter)
        return {
          _filter: {
            ...state._filter,
            [type]: isActive ? filter ^ value : filter | value,
          }
        }
      })
  }



  filterHeros = ([name, hero]) => {
    const { _filter: filter } = this.state
    return (!filter.job || filter.job & hero.job)
      && (!filter.type || filter.type & hero.type)
      && (!filter.rarity || filter.rarity === hero.rarity)
  }

  render() {
    const { selectedTeam, } = this.props
    const { _filter } = this.state

    return <Card tag="section" className="Characters">
      <CardHeader tag="h4"><FormattedMessage id="Characters.title" /></CardHeader>

      {/* TYPE FILTER */}
      <CardHeader>
        {Object.entries(TYPES).map(([key, value]) =>
          <TypeFilterButton key={key} name={key} onClick={this.handleFilter} value={value} active={_filter.type & value} />
        )}
      </CardHeader>

      {/* JOB FILTER */}
      <CardHeader>
        {Object.entries(JOBS).map(([key, value]) =>
          <JobFilterButton key={key} name={key} onClick={this.handleFilter} value={value} active={_filter.job & value} />
        )}
      </CardHeader>

      {/* RARITY FILER */}
      <CardHeader>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="rarity" checked={_filter.rarity === 0} onChange={() => this.handleFilter('rarity', 0)} />
            all
            </Label>
        </FormGroup>
        {Object.entries(RARITIES).map(([key, value]) =>
          <FormGroup check inline key={key}>
            <Label check>
              <Input type="radio" name="rarity" value={_filter['rarity']} onChange={() => this.handleFilter('rarity', value)} />
              {key}
            </Label>
          </FormGroup>
        )}
      </CardHeader>

      {
        Object.entries(CHARACTERS).filter(this.filterHeros).map(([name, infos]) => <React.Fragment key={name}>
          <CardHeader
            className="d-flex align-items-center"
            onClick={() => this.toggleAccordion(name, infos)}>
            <div className={`mr-2 character-picture ${getTypeName(infos)}`}>
              <img src={`${this.props.publicUrl}/assets/characters/${name}.png`} alt={'add'} />
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
