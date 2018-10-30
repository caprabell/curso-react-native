import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator(
  {
    Main,
    Product,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#626973',
      },
      headerTitleContainerStyle: {
        justifyContent: 'center',
      },
      headerTintColor: '#000',
    },
  },
);
