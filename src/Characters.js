import React, { useState, } from 'react'
import {
  Table,
  Button,
  Card, CardHeader, CardBody,

  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap'

import { TYPES } from './characters.service'

const TRType = ({ type }) => <>{!type ? 'empty'
  : type & TYPES.LIGHT ? 'light'
    : type & TYPES.EARTH ? 'earth'
      : type & TYPES.SHADOW ? 'shadow'
        : type & TYPES.FIRE ? 'fire'
          : type & TYPES.WATER ? 'water'
            : 'undefined'}</>

const Characters = ({ characters, onCharacterSelect = () => { } }) => {
  const [typeOpen, toggleType] = useState(false)

  return <Card tag="section">
    <CardHeader tag="h4">Personnages</CardHeader>
    <CardBody className="p-0">
      <Table striped borderless hover responsive>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">
              <ButtonDropdown isOpen={typeOpen} toggle={() => toggleType(!typeOpen)}>
                <DropdownToggle caret>
                  filtre types
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem header>Header</DropdownItem> */}
                  {/* <DropdownItem disabled>Action</DropdownItem> */}
                  {/* <DropdownItem>Another Action</DropdownItem> */}
                  {/* <DropdownItem divider /> */}
                  <DropdownItem>eau</DropdownItem>
                  <DropdownItem>terre</DropdownItem>
                  <DropdownItem>feu</DropdownItem>
                  <DropdownItem>lumiere</DropdownItem>
                  <DropdownItem>tenebre</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </th>
            <th scope="col">
              <ButtonDropdown isOpen={typeOpen} toggle={() => toggleType(!typeOpen)}>
                <DropdownToggle caret>
                  filtre metier
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>bagarreur</DropdownItem>
                  <DropdownItem>barbare</DropdownItem>
                  <DropdownItem>chevalier</DropdownItem>
                  <DropdownItem>voleur</DropdownItem>
                  <DropdownItem>lancier</DropdownItem>
                  <DropdownItem>samurai</DropdownItem>
                  <DropdownItem>archer</DropdownItem>
                  <DropdownItem>margicien</DropdownItem>
                  <DropdownItem>tireur</DropdownItem>
                  <DropdownItem>support</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => <tr key={character.id}>
            <td><Button
              type="button"
              color="primary"
              onClick={() => onCharacterSelect(character)}>Ajouter</Button></td>
            <th scope="row" className="align-middle text-nowrap">{character.name}</th>
            <td className="align-middle"><TRType type={character.type} /></td>
            <td className="align-middle"><TRType type={character.type} /></td>
          </tr>)}
        </tbody>
      </Table>
    </CardBody>
  </Card>
}

export default Characters
