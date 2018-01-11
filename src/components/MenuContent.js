import React from 'react'

import {
  Container,
  Menu,
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'

export default () => (
  <Container>
    <NavLink exact to="/" activeClassName="active" className="item">Home</NavLink>
  </Container>
)
