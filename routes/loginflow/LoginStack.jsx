import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../../screens/loginflow/LoginScreen';
import RegisterScreen from '../../screens/loginflow/RegisterScreen';

const LoginStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },

    Register: {
        screen: RegisterScreen,
    },
},
{
  defaultNavigationOptions: {
    // headerTintColor: '#444'
    headerShown:false,
    headerStyle: { backgroundColor: '#Fedbd0', height: 80 }
  }
  }
)

export default LoginStack