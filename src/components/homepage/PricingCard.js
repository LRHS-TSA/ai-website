import React, { Component } from 'react'
import {
  Header,
  Label,
  Card,
  Icon,
  List
} from 'semantic-ui-react'

export default class PricingCard extends Component {
  render() {
    var listItems = [];
    for (var num in this.props.items) {
        listItems.push(
         <List.Item>
            <List.Content>
              <List.Description style={{ textAlign: 'center' }}>
              <Header as='h3' textAlign='center'>{this.props.items[num]}</Header>
              </List.Description>
            </List.Content>
          </List.Item>
        )
    }
    return (
        <Card raised>
            <Card.Content>
                <Card.Header style={{ textAlign: 'center' }}>
                    <Icon name={this.props.icon} size='huge' />
                    <Header as='h2' textAlign='center'>{this.props.title}</Header>
                    <p style={{ fontSize: '0.75em', textAlign: 'center' }}>
                    {this.props.description}
                    </p>
                </Card.Header>
            </Card.Content>
            <Card.Content>
                <List divided relaxed>
                <List.Item>
                    <List.Content>
                    <List.Description style={{ textAlign: 'center' }}>
                        <Label color='blue' size='big'>{this.props.bigFeature}</Label>
                    </List.Description>
                    </List.Content>
                </List.Item>
                {listItems}
                </List>
            </Card.Content>
            <Card.Content extra>
             <Header as='h1' textAlign='center' disabled>{this.props.price}</Header>
            </Card.Content>
        </Card>
    );
  }
}
