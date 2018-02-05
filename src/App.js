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
                <Grid.Column width={2}>
                  <Header inverted as='h4' content='TSA Pages' />
                  <List link inverted>
                    <List.Item as='a' href={require('./references.pdf')}>Bibliography</List.Item>
                    <List.Item as='a' href={'https://lrhstsa.com'}>LRHS Chapter Website</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Header as='h4' inverted>Security Inc.</Header>
                  <p>Security Inc. is a top of the line security company that has the primary goal of ensuring that your business or company is properly protected from any security related issues that may arise. Through the use of our artificial intelligence system RAISS, businesses are able to monitor all activity in their area simultaneously. This results in superior safety compared to other surveillance companies. Nothing is more important to Security Inc. than our customer's well being.</p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Header inverted as='h4' content='Contact' />
                  <List link inverted>
                    <List.Item as='a'>1-800-SECURES</List.Item>
                    <List.Item as='a'>securityinc@securityinc.com</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
