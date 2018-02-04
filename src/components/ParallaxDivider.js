import React, { Component } from 'react'
import {
  Container,
  Header
} from 'semantic-ui-react'

import { Parallax } from 'react-parallax';

export default class ParallaxDivider extends Component {
  render() {
    return (
        <Parallax
            bgImage={this.props.image}
            bgImageAlt="parallax"
            strength={this.props.strength}
            style={{marginBottom: '2em'}}
          ><div style={{height: 300}}>
        </div></Parallax>
    );
  }
}
