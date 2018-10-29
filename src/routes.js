import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';

export default createStackNavigator({
  Main,
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#00ff00',
    },
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
    headerTintColor: '#000',
  },
});
