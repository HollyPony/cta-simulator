import React from 'react'

import Team from './Team'
import Characters from './Characters'

const TeamBuilder = () => {
  const [selectedTeam, setSelectedTeam] = React.useState()

  const onCharacterSelect = React.useCallback((name, infos) => {
    if (selectedTeam && selectedTeam[name]) {
      return
    }

    setSelectedTeam(s => ({ ...s, [name]: { ...infos } }))
  }, [selectedTeam, setSelectedTeam])

  return (
    <>
      <Team
        // className="mb-4"
        className="mb-4 mt-4"
        team={selectedTeam}
        clear={() => setSelectedTeam()} />

      <Characters
        selectedTeam={selectedTeam}
        onCharacterSelect={onCharacterSelect} />
    </>
  )
}

export default TeamBuilder
