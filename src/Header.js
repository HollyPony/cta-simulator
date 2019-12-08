import React, { useState, } from 'react'
import {
  Nav,/* NavItem, NavLink,*/
  Navbar/*, NavbarText*/, NavbarBrand, NavbarToggler,
  // UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Collapse,
} from 'reactstrap'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return <header>
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">CTA-Simulator</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {/* <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem> */}
          {/* <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem> */}
          {/* <UncontrolledDropdown nav inNavbar>
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
        </UncontrolledDropdown> */}
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
      </Collapse>
    </Navbar>
  </header>
}

export default Header
