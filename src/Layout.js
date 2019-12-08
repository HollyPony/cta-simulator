import React from 'react'
import {
  Container,
  Card, CardHeader, CardBody,


  Nav,/* NavItem, NavLink,*/
  Navbar/*, NavbarText, NavbarBrand*/, NavbarToggler,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Collapse,
} from 'reactstrap'

import './App.scss'

import { withCharacters, } from './characters.service'

import Team from './Team'
import Characters from './Characters'

class Layout extends React.Component {
  state = {
    isOpen: false,
    selectedTeam: [],
    availableCharacters: [],
  }

  componentDidMount() {
    const { CharactersService, } = this.props
    this.setState({
      availableCharacters: CharactersService.getCharacters()
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { CharactersService, } = this.props
    const { selectedTeam, } = this.state
    if (selectedTeam !== prevState.selectedTeam) {
      this.setState({
        availableCharacters: CharactersService.getCharacters().filter(character =>
          selectedTeam.find(_character => _character.id !== character.id)
        )
      })
    }
  }

  onCharacterSelect = characterSelected => {
    this.setState(state => ({
      selectedTeam: [...state.selectedTeam, characterSelected]
    }))
  }

  render() {
    const { isOpen, selectedTeam, availableCharacters, } = this.state

    const toggle = () => this.setState({ isOpen: !isOpen })

    return <Container tag="main">
      <Navbar color="" light expand="xs">
        {/* <NavbarBrand href="/">CTA-Simulator</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
            </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
              </DropdownItem>
                <DropdownItem>
                  Option 2
              </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
              </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

      <div className="d-flex mb-4">
        <Team team={selectedTeam} />
        <Card tag="section" className="flex-fill ml-3">
          <CardHeader tag="h4">Result</CardHeader>
          <CardBody>
            Att: xxx
            Def: xxx
            </CardBody>
        </Card>
      </div>
      <Characters
        characters={availableCharacters}
        onCharacterSelect={this.onCharacterSelect} />
    </Container>
  }
}

export default withCharacters(Layout)
