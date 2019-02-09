import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!'
  })

  state = {
    messages: []
  }

  render() {
    const { username } = this.props.navigation.state.params;

    return (
      <GiftedChat 
        messages={this.state.messages} 
      />
    )
  }
}

export default Chat;