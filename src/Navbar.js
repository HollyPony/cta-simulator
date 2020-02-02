import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Nav,/* NavItem, NavLink,*/
  Navbar as RSNavbar/*, NavbarText, NavbarBrand*/, NavbarToggler,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Collapse,
} from 'reactstrap'

class Navbar extends React.Component {
  state = {
    isOpen: false,
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

  clearSelectedTeam = () => {
    this.setState({ selectedTeam: {} })
  }

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }))

  render() {
    const { isOpen, } = this.state

    return <RSNavbar color="" light expand="xs">
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <FormattedMessage id="option.test"
                defaultMessage="option.test" />
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
    </RSNavbar>
  }
}

export default Navbar
