import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';

export default createStackNavigator ({
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#ffff00'
        },
        headerTintColor: '#000'
    },
});