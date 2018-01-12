import React, { Component } from 'react'
import ClaimText from '../components/homepage/ClaimText'
import QuoteColumn from '../components/homepage/QuoteColumn'
import NewsExert from '../components/homepage/NewsExert'
import PageHeading from '../components/PageHeading'
import Particles from 'react-particles-js';
import { Parallax, Background } from 'react-parallax';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'


export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeading />
          <Parallax strength={300}>
            <div style={{height: 500}}>
              <Header
                as='h1'
                content="Meet RAISS"
                textAlign='center'
                inverted
                style={{ fontSize: '5em', fontWeight: 'normal', marginBottom: 0, marginTop: '4em' }}
              />
            </div>
            <Background>
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: 100
                      },
                      line_linked: {
                        shadow: {
                          enable: true,
                          color: "#3CA9D1",
                          blur: 5
                        }
                      }
                    }
                  }}
                  style={{backgroundColor: '#1b1c1d'}}
                />
            </Background>
          </Parallax>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <ClaimText
                  header="Go Mustangs!"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget enim eget sapien consectetur sollicitudin. Aliquam sit amet ante ut neque facilisis convallis eget non diam. Nam erat massa, placerat ac massa non, malesuada facilisis nibh. Donec rhoncus tellus nec enim tristique, ut pharetra metus rhoncus. Mauris nec elit augue. Integer tristique neque arcu, ut condimentum nisl pellentesque eget. Ut in lorem molestie, sollicitudin risus nec, laoreet enim. Vivamus imperdiet tristique ullamcorper. Pellentesque ut molestie felis."
                />
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Learn More</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <QuoteColumn quote="We're Pretty Good" quoteAuthor="Mr.Long" />
              <QuoteColumn quote="He's Probably Lying" quoteAuthor="Mr.Richards" />
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <NewsExert
              header="More Than Just TSA"
              exert="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget enim eget sapien consectetur sollicitudin. Aliquam sit amet ante ut neque facilisis convallis eget non diam. Nam erat massa, placerat ac massa non, malesuada facilisis nibh. Donec rhoncus tellus nec enim tristique, ut pharetra metus rhoncus. Mauris nec elit augue."
            />
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>In the News</a>
            </Divider>
            <NewsExert
              header="News!"
              exert="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget enim eget sapien consectetur sollicitudin. Aliquam sit amet ante ut neque facilisis convallis eget non diam. Nam erat massa, placerat ac massa non, malesuada facilisis nibh. Donec rhoncus tellus nec enim tristique, ut pharetra metus rhoncus. Mauris nec elit augue."
            />
          </Container>
        </Segment>
      </div>
    )
  }
}
