import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Card, CardHeader, CardBody,

  Button,
} from 'reactstrap'

import './Team.scss'

import { getTypeName } from './Consts'
const TeamMate = ({ name, infos, className, }) => <div key={name}
  className={['TeamMate', getTypeName(infos), className].join(' ')}>
  <img src={`/assets/characters/${name}.png`} alt={name} />
</div>


const Team = ({ team = {}, className, clear }) => {
  // console.log(team, className)
  return (
    <Card tag="section" className={[className].join(' ')}>
      <CardHeader tag="h4" className="d-flex align-items-center">
        <FormattedMessage id="Team.title" />

        <Button type="button"
          className="ml-auto border-top-right-0"
          onClick={clear}>Clear</Button>
      </CardHeader>
      <CardBody>
        <div className="Team">
          {/* TODO: in style : align to left */}
          {Object.entries(team).map(([name, infos]) =>
            <TeamMate key={name} name={name} infos={infos} className="w-25 px-1" />)}

          {Array.from({ length: 10 - Object.keys(team).length }, (_, id) => id).map(empty =>
            <div key={empty} className="TeamMate">&#10010;</div>
          )}
        </div>
      </CardBody>

      <CardHeader><FormattedMessage id="Team.result" /></CardHeader>
      <CardBody>
        <p><FormattedMessage id="Team.result.atk" values={{
          value: Object.values(team).reduce((acc, info) => acc + info.stats.atk, 0)
        }} /></p>
      </CardBody>
    </Card>
  )
}


export default Team
