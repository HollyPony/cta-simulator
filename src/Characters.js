import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Button,
  Card, CardHeader,
} from 'reactstrap'

// TODO: Move it in AppContext
import { CHARACTERS, TYPES, JOBS, RARITIES, getRarityName, getTypeName, getJobName } from './Consts'

import Character from './Components/Character'

import './Characters.scss'

const Img = ({ path, ...props }) => {
  // TODO: tr `alt`
  return <img src={`assets/${path}`} {...props} alt="" />
}

const filterReducer = (state, { type, value }) => {
  switch(type) {
    case 'type':
    case 'job':
    case 'rarity':
      return { ...state, [type]: Boolean(value & state[type]) 
        ? state[type] ^ value
        : state[type] | value }
    default:
      return state
  }
}

const filterInitialState = ({
  type: 0,
  job: 0,
  rarity: 0
})

const accordionReducer = (state, action) => {
  const type = action.type === 'toggle' ? state[action.name] ? 'close' : 'open' : action.type

  switch(type) {
    case 'open': return { ...state, [action.name]: true }
    case 'close': return { ...state, [action.name]: false }
    case 'closeAll': return {}
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

  const FilterButton = React.useMemo(() => ({ name, value, type, ...props }) => {
    const classes = ['mx-1 mb-2 filterButton', name, type].concat([(filterState[type] & value) ? 'active' : undefined]).filter(c => c).join(' ')
    return (
      <Button onClick={() => filterDispatch({ type, value })}
              className={classes}
              {...props}>
        <FormattedMessage id={`consts.${type}.${name}`} />
      </Button>
  )}, [filterState])

  const filterHeros = React.useCallback(([name, hero]) => {
    return (!filterState.job || filterState.job & hero.job)
      && (!filterState.type || filterState.type & hero.type)
      && (!filterState.rarity || filterState.rarity & hero.rarity)
  }, [filterState.job, filterState.rarity, filterState.type])

  return (
    <Card tag="section" className="Characters">
      <CardHeader tag="h4"><FormattedMessage id="Characters.title" /></CardHeader>

      {/* TYPE FILTER */}
      <CardHeader className="filters types d-flex flex-wrap pb-1">
        {Object.entries(TYPES).map(([key, value]) =>
          <FilterButton key={key} name={key} type="type" value={value} />
        )}
      </CardHeader>

      {/* JOB FILTER */}
      <CardHeader className="filters jobs d-flex flex-wrap pb-1">
        {Object.entries(JOBS).map(([key, value]) =>
          <FilterButton key={key} name={key} type="job" value={value} />
        )}
      </CardHeader>

      {/* RARITY FILTER */}
      <CardHeader className="filters rarities d-flex flex-wrap pb-1">
        {Object.entries(RARITIES).map(([key, value]) =>
          <FilterButton key={key} name={key} type="rarity" value={value} />
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
                <FormattedMessage id={`consts.rarity.${getRarityName(infos)}`} className="mr-2" />
              </div>
              <div>
                <FormattedMessage id={`consts.job.${getJobName(infos)}`} className="mr-2 font-italic" />
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
