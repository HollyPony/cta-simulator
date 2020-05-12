import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Nav, NavItem, NavLink,
  Navbar as RSNavbar/*, NavbarText, NavbarBrand*/, NavbarToggler,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Collapse,
} from 'reactstrap'

const NavbarI = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <RSNavbar color="" light expand="xs">
      <NavbarToggler onClick={() => setIsOpen(true)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <FormattedMessage id="Navbar.page1.test" />
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
  )
}

export default NavbarI
