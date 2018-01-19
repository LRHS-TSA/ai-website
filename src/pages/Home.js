import React, { Component } from 'react'
import ClaimText from '../components/homepage/ClaimText'
import FeatureColumn from '../components/homepage/QuoteColumn'
import NewsExert from '../components/homepage/NewsExert'
import PageHeading from '../components/PageHeading'
import PricingCard from '../components/homepage/PricingCard'
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
  Accordion,
  Icon,
  Card,
  List,
  Label
} from 'semantic-ui-react'


export default class Home extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

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
        <Segment style={{ padding: '8em 0em' }} vertical id="meet">
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <ClaimText
                  header="AI To Keep Us Safe."
                  text="The Robotic Artificial Intelligence Security System, or RAISS, is a security-based artificial intelligence system that has the potential to revolutionize modern surveillance and transform defense in the workforce. Using technologies spanning from facial recognition to the prediction of future actions, the RAISS ensures for maximum safety in any business or commercial environment. By adhering to Isaac Asimov’s Three Laws of Robots, the RAISS can be trusted with the protection of human life without the need to worry about the system going to extreme lengths to complete a fundamental action that it believes to be beneficiary."
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
          </Grid>
        </Segment>
        <Parallax
            bgImage={require('../images/camera.jpg')}
            bgImageAlt="the camera"
            strength={200}
            style={{marginBottom: '4em'}}
          ><div style={{height: 300}}>
        </div></Parallax>
        <Segment style={{ padding: '0em' }} vertical>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>How it Works</a>
        </Divider>
          <Grid columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <FeatureColumn iconName='video camera' text="Camera's give RAISS eyes over your facility." />
              <FeatureColumn iconName='user circle outline' text="Facial recognition to identify trespassers." />
              <FeatureColumn iconName='spy' text="Body language monitoring to spot nervous behaviours." />
              <FeatureColumn iconName='dashboard' text="All data is collected to then predict the likelihood of a crime being committed." />
            </Grid.Row>
          </Grid>
          <Accordion>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Header as='h2' textAlign='center'>
                <Icon name='dropdown' />
                In More Detail
              </Header>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <Container text>
                <Segment padded>
                  <p style={{ fontSize: '1.33em' }}>
                    The RAISS, essentially, is an AI system that “sits” in the security monitor room of a business or commercial industry building, monitoring the cameras for any suspicious or endangering situations. By continuously monitoring and mapping the environment it surveys, the RAISS is constantly updating. This technology is based off of the Simultaneous Location and Mapping technique that allows for robots to constantly update a map as they learn new information over a period of time. Upon sensing any irregular actions, the system is programmed to automatically alert the necessary level of security personnel, meaning it could inform anyone from the security guards in the building, to police officers, or even the FBI. It does this by sending a message saying something along the lines of “Alert! Life endangering situation at *input location*. Need immediate response!” to the devices of all personnel. At that point, the robot has done its job and the situation is now in the hands of the necessary human responders. This AI system could potentially create more jobs than it eliminates. Even when expunging the need for human camera monitors, there will be an increased demand for more security personnel, engineers, coders, people to make routine checkups on the robot, and any other necessary employees.
                  </p>
                </Segment>
              </Container>
            </Accordion.Content>
          </Accordion>
        </Segment>

        <Segment style={{ padding: '4em 0em' }} vertical>
          <Container>
            <Card.Group itemsPerRow={3}>
              <PricingCard
                title="Community Edition"
                icon="users"
                description="Free to setup on your own system to your liking. Set up a whole network or experiment with the AI."
                bigFeature="Core RAISS AI System"
                items={["Community Support", "Up to 10 Cameras", "Access to RAISS API"]}
              />
              <PricingCard
                title="Business Edition"
                icon="truck"
                description="RAISS is brought to your small business or warehouse, ready to monitor with the confiedence of 24/7 support."
                bigFeature="Core RAISS AI System"
                items={["24/7 Support", "Up to 20 Cameras", "Web Monitoring", "Free Installation On-Site", "Phone Alerts"]}
              />   
              <PricingCard
                title="Enterprise Edition"
                icon="building"
                description="RAISS is ready to watch your large warehouse or office, given all the sources it needs to make sure nothing gets past without it knowing it."
                bigFeature="All Business Edition Features"
                items={["Up to 100 Cameras", "Phone Monitoring", "SSO for Webpanel"]}
              />
            </Card.Group>
          </Container>
        </Segment>
      </div>
    )
  }
}
