import React from 'react'
import {
  Container,
} from 'reactstrap'

import Team from './Team'
import Characters from './Characters'

class Layout extends React.Component {
  state = {
    selectedTeam: {},
  }

  onCharacterSelect = (name, infos) => {
    const { selectedTeam } = this.state
    if (selectedTeam[name]) {
      return
    }

    this.setState(state => ({
      selectedTeam: { ...state.selectedTeam, [name]: { ...infos } }
    }))
  }

  clearSelectedTeam = () => this.setState({ selectedTeam: {} })

  render() {
    const { selectedTeam, } = this.state

    return <Container tag="main">
      <Team
        className="mb-4 mt-4"
        team={selectedTeam}
        clear={this.clearSelectedTeam} />

      <Characters
        selectedTeam={selectedTeam}
        onCharacterSelect={this.onCharacterSelect} />
    </Container>
  }
}

export default Layout
