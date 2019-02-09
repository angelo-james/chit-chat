import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from '../common';

class Main extends Component {
  state = {
    username: ''
  }

  render() {
    return(
      <Card>
        <Text style={styles.headerText}>Chit Chat</Text>

        <CardSection>
          <Input
            placeholder='Username'
            label='Username'
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.props.navigation.navigate('Chat', { username: this.state.username })}
          >
            Enter
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  headerText: {
    fontSize: 25,
    textAlign: 'center'
  }
}

export default Main;