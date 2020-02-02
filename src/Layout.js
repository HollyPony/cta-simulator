import React from 'react'
import {
  Container,
} from 'reactstrap'

// import Navbar from './Navbar'
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

    return new Promise(resolve => this.setState(state => ({
      selectedTeam: { ...state.selectedTeam, [name]: { ...infos } }
    }), resolve))
  }

  clearSelectedTeam = () => this.setState({ selectedTeam: {} })

  render() {
    const { selectedTeam, } = this.state

    return <Container tag="main">
      {/* <Navbar /> */}
      <Team
        // className="mb-4"
        className="mb-4 mt-4"
        team={selectedTeam}
        clear={this.clearSelectedTeam} />

      <Characters
        publicUrl={this.props.publicUrl}
        selectedTeam={selectedTeam}
        onCharacterSelect={this.onCharacterSelect} />
    </Container>
  }
}

export default Layout
