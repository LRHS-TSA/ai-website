import React, { Component } from 'react'
import ClaimText from '../components/homepage/ClaimText'
import FeatureColumn from '../components/homepage/QuoteColumn'
import PricingCard from '../components/homepage/PricingCard'
import ParallaxDivider from '../components/ParallaxDivider'
import Particles from 'react-particles-js';
import { Parallax, Background } from 'react-parallax';
import Typed from 'react-typed';
import Waypoint from 'react-waypoint';


import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Icon,
  Card,
  Table,
  List
} from 'semantic-ui-react'


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.typistStarted = false
    this._handleEnter = () => {
      if (!this.typistStarted) {
        this.typed.start()
        this.typistStarted = true
      }
    }
  }

  render() {
    return (
      <div>
          <Parallax strength={500}>
            <div style={{height: '100vh'}}>
              <Header
                as='h1'
                content="Meet RAISS"
                subheader="The Future of Security"
                textAlign='center'
                inverted
                style={{ fontSize: '5em', fontWeight: 'normal', marginBottom: 0, marginTop: '40vh' }}
              />
            </div>
            <Background>
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: window.innerWidth > 480 ? 20 : 0,
                        density: {
                          enable: true,
                          value_area: 800
                        }
                      },
                      line_linked: {
                        shadow: {
                          distance: 150,
                          enable: true,
                          color: "#3CA9D1"
                        }
                      },
                      interactivity: {
                        onresize: {
                          density_auto: true,
                          density_area: 800
                        }
                      }
                    }
                  }}
                  style={{backgroundColor: '#1b1c1d', minHeight: '100vh'}}
                />
            </Background>
          </Parallax>
        <Segment style={{ padding: '2em 0em' }} vertical id="meet">
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={16}>
                <ClaimText
                  header="AI to Keep Us Safe."
                  text="AI, or Artificial Intelligence, is the science and engineering of making intelligent machines. A machine is considered intelligent if it can carry out tasks that would require the general, human definition of “intelligence” to complete. AI systems will typically demonstrate characteristics such as planning, learning, reasoning, problem-solving, perception, and even creativity. The Robotic Artificial Intelligence Security System, or RAISS, is a security-based artificial intelligence system that has the potential to revolutionize modern surveillance and transform defense in the workforce.  By adhering to Isaac Asimov’s Three Laws of Robots, the RAISS can be trusted with the protection of human life without the need to worry about the system going to extreme lengths to complete a fundamental action that it believes to be beneficiary."
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <ParallaxDivider
            image={require('../images/camera.jpg')}
            strength={200}
            height={'60vh'} />
        <Segment style={{ padding: '0em' }} vertical id="works">
        <ClaimText
          header="Eyes for Your Business"
          text="The RAISS, essentially, is an AI system that “sits” in the security monitor room of a business or commercial industry building, monitoring the cameras for any suspicious or endangering situations. By continuously monitoring and mapping the environment it surveys, the RAISS is able to constantly update. This technology is based off of the Simultaneous Location and Mapping technique that allows for robots to continuously provide up-to-date details about a map as they learn new information over a period of time. Upon sensing any irregular actions, the system is programmed to automatically alert the necessary level of security personnel, meaning it could inform anyone from the security guards in the building, to police officers, or even the FBI. It does this by sending a message to the devices of all personnel. At that point, the robot has done its job and the situation is now in the hands of the necessary human responders. This AI system could potentially create more jobs than it eliminates. Even when expunging the need for human camera monitors, there will be an increased demand for more security personnel, engineers, coders, people to make routine checkups on the robot, and any other necessary employees."
        />
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          How it Works
        </Divider>
          <Grid columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <FeatureColumn iconName='video camera' text="You give RAISS eyes." subtext="RAISS monitors the cameras that are placed all over the facility to look for suspicious activities through facial recognition." />
              <FeatureColumn iconName='user circle outline' text='Facial recognition to identify trespassers.' subtext="Using technologies spanning from facial recognition to the prediction of future actions, the RAISS ensures for maximum safety in any business or commercial environment." />
              <FeatureColumn iconName='spy' text='Body language monitoring to spot nervous behaviors.' subtext="Using technologies to identify expressions and potential future actions, RAISS can notify the security personnel to stop a crime before it is committed." />
              <FeatureColumn iconName='dashboard' text='All data is collected to then predict the likelihood of a crime being committed.' subtext="Data from prior activities and crimes is stored to increase reliability when finding the next suspect." />
            </Grid.Row>
          </Grid>
        </Segment>
        <ParallaxDivider
            image={require('../images/servers.jpeg')}
            strength={200} />
        <Segment style={{ padding: '2em 0em', paddingBottom: '4em' }} vertical id="research">
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column>
                <ClaimText
                  header="RAISS For Research"
                  text="Using the technology of RAISS, new information can be obtained. This data can be further refined to find statistics along with common patterns that allow police, firefighters, paramedics, and other response units to catch problems before they occur. It also allows proper pre-planning to ensure the best course of action is taken when a potentially dangerous situation is occurring. Existing statistics provide common patterns, including where a crime is likely to occur, human behavior, repeated purchase history, and general similarities between suspects. Along with this, the system has the capability to calculate how many people are in an area, and if individuals are entering, leaving, or are around a specific area. By receiving this information, it is possible to calculate a percentage of the general frequency of crime occurrence based off of the amount of people that pass a certain location. This saves time and keeps crime rates of cities updated; Additionally, the system compiles the data over time without the risk of missing or corrupted information."
                />
                <br />
                <p style={{ fontSize: '1.33em' }}>
                Businesses are also able to obtain useful information to improve the location and advertisement of their business. Facial recognition means a store can track how often a specific individual enters and exits their store. The store owner could also determine the density of the foot traffic and the percentage of people entering the store in relation to the foot traffic. A shop that has advertisements is able to test different advertising strategies and instantly tell which advertisement drew the most attention and which created the greatest profit. Information can be compiled to research which strategies generate the best business and the strength of the location. Over time, the Artificial Intelligence could calculate the growth of the companies by comparing profits before the AI was installed related to the company’s growth in the years following the installation.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>      
        <ParallaxDivider
            image={require('../images/chalk.jpeg')}
            strength={200} />
        <Segment style={{ padding: '2em 0em', paddingBottom: '4em' }} vertical id="education">
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column>
                <ClaimText
                  header="Training Those in Blue"
                  text="Artificial intelligence will impact education in an incredible number of ways. For example, using technology such as RAISS improves the quality of training for police officers or other security positions. The AI training would tremendously increase the capability of police officers. The novel style of training would consist of various new aspects. Using AI technology for training provides experience and information such as records, problems, and actions that are common before crimes, which a human would not be able to recognize instantly. The artificial intelligence could teach police officers about common situations that frequently occur before a crime that would not generally be recognized by an individual who was not specifically trained for the situations. Aspects of such scenarios may include minute actions people make, such as signs of intimidation or nervousness. Using the robot, officers would be able to recognize these minute actions much more quickly. Another useful component in AI officer education is being able to instantly obtain records of criminals. Having access to the criminals’ information allows police to discover patterns in criminal record, purchase history, and other documentation. Having access to this data improves the officers’ general knowledge."
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>   
        <ParallaxDivider
            image={require('../images/police.jpeg')}
            strength={200} />

          <Segment style={{ padding: '2em 0em' }} vertical id="api">
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column>
                  <ClaimText
                    header="Developer Friendly"
                    text="RAISS has a built in API to support the development community that wishes to use the AI for their own projects. RAISS AI offers the same trained machine learning system used for security that can be then used for everything from a custom web panel, to automating respones as seen fit."
                  />
                  <br />
                  <Waypoint onEnter={this._handleEnter}>
                   <div>
                      <Segment inverted style={{fontFamily: 'Source Sans Pro', fontSize: '1.5em'}}>
                        $ <Typed
                          typedRef={(typed) => { this.typed = typed; }}
                          stopped
                          strings={['raiss cameras list', 'raiss cameras log store', 'raiss objects log "Weapon"']} 
                          typeSpeed={50}
                          backSpeed={50}
                          backDelay={3000}
                          shuffle
                          loop
                          smartBackspace
                          startDelay={2000}
                        />
                      </Segment>
                    </div>
                  </Waypoint>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

        <Segment style={{ padding: '2em 0em' }} vertical id="issac">
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={12}>
                <ClaimText
                  header="We Follow the Rules so You Don't Have to Worry"
                  text="Isaac Asimov believed that at some point in time, robots would advance mentally and physically to the point where they are superior to humans. To address his negative concerns, Asimov created three laws for robotics since humans would not be able to stand up to the capabilities of robots. However, his rules revolved around the fact that, unlike humans, robots cannot think for themselves. Asimov’s plan was to embed the rules so deeply into their brains that if a robot were to break even one rule, the circuitry would be damaged beyond repair. RAISS adheres to all the following robotics rules in order to allow the AI to be a friend, not foe."
                />
              </Grid.Column>
              <Grid.Column floated='right' width={4}>
                <Image
                  circular
                  size='large'
                  src={require('../images/certified.svg')}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Container style={{ marginTop: '1em' }}>
            <Table celled structured>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell rowSpan='2'>Rule</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>A robot may not injure a human being or, through inaction, allow a human being to come to harm.</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>A robot must obey orders given it by human beings except where such orders would conflict with the First Law.</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>
        </Segment>

        <Segment style={{ padding: '2em 0em' }} vertical id="safety">
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column>
                <ClaimText
                  header="The Caveats to AI Monitoring"
                  text="Through the use of facial recognition and detection of body language, the privacy of individuals is potentially violated. These features are necessary to create a safe environment in public spaces. There could possibly be system failures and hacking that may lead to leaked private information gained from monitoring security cameras. However, RAISS’ reputation as a security system that keeps valuable information to maintain safety and security in a business or commercial setting has been preserved."
                />
                <br />
                <p style={{ fontSize: '1.33em' }}>
                RAISS could potentially be an incredible security tool. However, to provide for the most successful outcome, some private information must be given up to ensure that public spaces stay as safe as possible. Though breaches are possible, RAISS has measures that prevent any leaks of data. RAISS has a reputation of maintaining safety and security in business and commercial settings, so buyers should not be wary.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <ParallaxDivider
            image={require('../images/graycameras.jpeg')}
            strength={200} />

        <Segment style={{ padding: '4em 0em' }} vertical>
          <Container>
            <Card.Group itemsPerRow={3}>
              <PricingCard
                title="Community Edition"
                icon="users"
                description="Free to setup on your own system to your liking. Set up a whole network or experiment with the AI."
                bigFeature="Core RAISS AI System"
                items={["Community Support", "Up to 10 Cameras", "Access to RAISS API"]}
                price="Free"
              />
              <PricingCard
                title="Business Edition"
                icon="truck"
                description="RAISS is brought to your small business or warehouse, ready to monitor with the confidence of 24/7 support."
                bigFeature="Core RAISS AI System"
                items={["24/7 Support", "Up to 20 Cameras", "Web Monitoring", "Free Installation On-Site", "Phone Alerts"]}
                price="$2500"
              />   
              <PricingCard
                title="Enterprise Edition"
                icon="building"
                description="RAISS is ready to watch your large warehouse or office, given all the sources it needs to make sure nothing gets past without it knowing it."
                bigFeature="All Business Edition Features"
                items={["Up to 100 Cameras", "Phone Monitoring", "SSO for Webpanel"]}
                price="$4500"
              />
            </Card.Group>
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Header inverted as='h4' content='TSA Pages' />
                  <List link inverted>
                    <List.Item as='a' href={require('../references.pdf')}>Bibliography</List.Item>
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
