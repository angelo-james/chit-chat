import Main from './src/components/Main';
import Chat from './src/components/Chat';

import { createStackNavigator } from 'react-navigation';

const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat }
})

export default navigator;