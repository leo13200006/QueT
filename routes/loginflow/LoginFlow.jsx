import { createSwitchNavigator } from 'react-navigation';
import LoginStack from './LoginStack'
import PhoneVerificationScreen from '../../screens/loginflow/PhoneVerificationScreen';

const LoginFlow = createSwitchNavigator({
    LoginNav: LoginStack,
    PhoneVeri: PhoneVerificationScreen,
},
{
    defaultNavigationOptions: {
        // headerTintColor: '#444'
        headerStyle: { backgroundColor: '#Fedbd0', height: 80 }
      }
}
)

export default LoginFlow