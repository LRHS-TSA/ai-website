import React, { Component } from 'react'

import Home from './pages/Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'


export default class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
          </div>
        </Router>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>About The Team</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='TSA Pages' />
                  <List link inverted>
                    <List.Item as='a'>References</List.Item>
                    <List.Item as='a'>LEAP</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Security Inc.</Header>
                  <p>Where innovation meets peace of mind.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
