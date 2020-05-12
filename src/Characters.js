import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Button,
  Card, CardHeader,
  FormGroup, Input, Label,
} from 'reactstrap'

// TODO: Move it in AppContext
import { CHARACTERS, TYPES, JOBS, RARITIES, getRarityName, getTypeName, getJobName } from './Consts'

import Character from './Components/Character'

import './Characters.scss'

const Img = ({ path, ...props }) => {
  // TODO: tr `alt`
  return <img src={`assets/${path}`} {...props} alt="" />
}

const FilterButton = ({ active, filter, value, name, onClick = () => { }, className, ...props }) => {
  const classes = React.useMemo(() => 
    ['mx-1 filterButton', name].concat([active ? 'active' : undefined]).concat(className).filter(c => c).join(' ')
  , [active, className, name])
  return (
  <Button
    onClick={() => onClick(filter, value)}
    className={classes}
    {...props}
  >
    {name}
  </Button>
)}

// TODO: translate
const TypeFilterButton = ({ className, ...props }) => (
  <FilterButton
    filter="type"
    className={[className, 'type']}
    {...props} />
)

// TODO: translate
const JobFilterButton = ({ className, ...props }) => (
  <FilterButton
    filter="job"
    className={[className, 'job']}
    {...props} />
)

const filterReducer = (state, action) => {
  switch(action.type) {
    case 'rarity':
      return { ...state, rarity: action.value }
    case 'type':
    case 'job':
      return { ...state, [action.type]: Boolean(action.value & state[action.type]) ? state[action.type] ^ action.value : state[action.type] | action.value }
    default:
      return state
  }
}

const filterInitialState = () => ({
  type: 0,
  job: 0,
  rarity: 0
})

const accordionReducer = (state, action) => {
  const type = action.type === 'toggle' ? state[action.name] ? 'close' : 'open' : action.type

  switch(type) {
    case 'open': return { ...state, [action.name]: true }
    case 'close': return { ...state, [action.name]: false }
    default: return state
  }
}

const Characters = ({
  selectedTeam,
  onCharacterSelect
}) => {
  const [filterState, filterDispatch] = React.useReducer(filterReducer, filterInitialState)
  const [accordionState, accordionDispatch] = React.useReducer(accordionReducer, {})

  const addHero = React.useCallback((name, infos) => {
    onCharacterSelect(name, infos)
    accordionDispatch({ type: 'close', name })
  }, [onCharacterSelect])

  const filterHeros = React.useCallback(([name, hero]) => {
    return (!filterState.job || filterState.job & hero.job)
      && (!filterState.type || filterState.type & hero.type)
      && (!filterState.rarity || filterState.rarity === hero.rarity)
  }, [filterState.job, filterState.rarity, filterState.type])

  return (
    <Card tag="section" className="Characters">
      <CardHeader tag="h4"><FormattedMessage id="Characters.title" /></CardHeader>

      {/* TYPE FILTER */}
      <CardHeader className="filters types d-flex flex-wrap">
        {Object.entries(TYPES).map(([key, value]) =>
          <TypeFilterButton key={key} name={key} onClick={() => filterDispatch({ type: 'type', value })} value={value} active={filterState.type & value} />
        )}
      </CardHeader>

      {/* JOB FILTER */}
      <CardHeader className="filters jobs d-flex flex-wrap">
        {Object.entries(JOBS).map(([key, value]) =>
          <JobFilterButton key={key} name={key} onClick={() => filterDispatch({ type: 'job', value })} value={value} active={filterState.job & value} />
        )}
      </CardHeader>

      {/* RARITY FILER */}
      <CardHeader className="filters rarities d-flex flex-wrap">
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="rarity" checked={filterState.rarity === 0} onChange={() => filterDispatch({ type: 'rarity', value: 0 })} />
            all
            </Label>
        </FormGroup>
        {Object.entries(RARITIES).map(([key, value]) =>
          <FormGroup check inline key={key}>
            <Label check>
              <Input type="radio" name="rarity" value={filterState.rarity} onChange={() => filterDispatch({ type: 'rarity', value })} />
              {/* TODO: translate */}
              {key}
            </Label>
          </FormGroup>
        )}
      </CardHeader>

      {Object.entries(CHARACTERS).filter(filterHeros).map(([name, infos]) => (
        <React.Fragment key={name}>
          <CardHeader
            className="d-flex align-items-center"
            onClick={() => accordionDispatch({ type: 'toggle', name })}>
            <div className={`mr-2 character-picture ${getTypeName(infos)}`}>
              <Img path={`characters/${name}.png`} />
            </div>
            <div>
              <div>
                <span className="mr-2 font-weight-bold">
                  <FormattedMessage id={`hero.${name}`} />
                </span>
                <span className="mr-2">{getRarityName(infos)}</span>
              </div>
              <div>
                <span className="mr-2 font-italic">{getTypeName(infos)}</span>
                <span className="mr-2 font-italic">{getJobName(infos)}</span>
              </div>
            </div>
            <Button
              className="ml-auto"
              color="info">
              <FormattedMessage id={`Characters.${accordionState[name] ? 'close' : 'configure'}`} />
            </Button>
          </CardHeader>
          <Character
            isOpen={accordionState[name]}
            infos={infos}
            disabled={selectedTeam && (Boolean(selectedTeam[name]) || Object.keys(selectedTeam).length >= 10)}
            onSubmit={data => addHero(name, data)} />
        </React.Fragment>
      ))}
    </Card >
  )
}

export default Characters
