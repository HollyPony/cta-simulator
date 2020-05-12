import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Button, CardBody, Collapse,
} from 'reactstrap'

import Stats from './Stats'

const infosReducer = (state, action) => ({ ...state, ...action })

const infosInitializer = (initialState) => ({
  ...initialState,
  stars: 1,
  awakens: 0
})

const Character = (props) => {
  const { isOpen, infos, disabled, onSubmit } = props

  const [infosState, infosDispatch] = React.useReducer(infosReducer, infos, infosInitializer)

  const addStar = React.useCallback(() => infosDispatch({ stars: infosState.stars < 7 ? infosState.stars + 1 : 7 }), [infosState.stars])
  const removeStar = React.useCallback(() => infosDispatch({ stars: infosState.stars > 0 ? infosState.stars - 1 : 0 }), [infosState.stars])
  const awake = React.useCallback(() => infosDispatch({
    awakens: infosState.awakens < infosState.stars ? infosState.awakens + 1 : infosState.awakens
  }), [infosState.awakens, infosState.stars])
  const sleep = React.useCallback(() => infosDispatch({
    awakens: infosState.awakens > 0 ? infosState.awakens - 1 : 0
  }), [infosState.awakens])

  const starArray = React.useMemo(() => Array.from({ length: 7 }, (_, id) => id + 1), [])

  return (
    <CardBody tag={Collapse} isOpen={isOpen}>
      {isOpen && <div>
        <div className="stars d-flex">
          {starArray.map(id => <span key={id}
            className={`star ${(id <= infosState.stars)
              ? (id <= infosState.awakens) ? 'awake' : 'normal'
              : ''}`} />)}
        </div>
        <button onClick={() => removeStar()}>remove star</button>
        <button onClick={() => addStar()}>add star</button>
        <button onClick={() => awake()}>awake</button>
        <button onClick={() => sleep()}>sleep</button>

        <Stats hero={infosState} />

        <Button
          type="button"
          color="primary"
          disabled={disabled}
          onClick={() => onSubmit(infosState)}>
          <FormattedMessage id="Characters.add" />
        </Button>
      </div>}
    </CardBody>
  )
}

export default Character