import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Chat extends Component {
  render() {
    const { username } = this.props.navigation.state.params;

    return (
      <View>
        <Text>
          { username }
        </Text>
      </View>
    )
  }
}

export default Chat;