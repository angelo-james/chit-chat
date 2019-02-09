import Main from './src/components/Main';
import Chat from './src/components/Chat';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat }
  },
  {
    initialRouteName: 'Main'
  }
)

export default createAppContainer(AppNavigator);