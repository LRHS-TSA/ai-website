import React from 'react'

import {
  Container,
  Menu,
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'
import Scrollchor from 'react-scrollchor';

export default () => (
  <Container>
      <Menu.Item className="item"><Scrollchor to="#meet">Meet RAISS</Scrollchor></Menu.Item>
  </Container>
)
