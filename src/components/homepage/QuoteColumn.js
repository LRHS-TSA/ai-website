import React, { Component } from 'react'
import {
  Header,
  Grid,
  Icon
} from 'semantic-ui-react'

export default class QuoteColumn extends Component {
  render() {
    return (
      <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
        <Icon name={this.props.iconName} size='massive' />
        <Header as='h3' style={{ fontSize: '1.5em' }}>{this.props.text}</Header>
      </Grid.Column>
    );
  }
}
