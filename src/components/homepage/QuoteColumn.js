import React, { Component } from 'react'
import {
  Header,
  Grid
} from 'semantic-ui-react'

export default class QuoteColumn extends Component {
  render() {
    return (
      <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
        <Header as='h3' style={{ fontSize: '2em' }}>{ '"' + this.props.quote + '"' }</Header>
        <p style={{ fontSize: '1.33em' }}>{ this.props.quoteAuthor }</p>
      </Grid.Column>
    );
  }
}
