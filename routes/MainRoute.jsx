import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../screens/loginflow/LoadingScreen';
import LoginFlow from './loginflow/LoginFlow';

const MainRoute = createSwitchNavigator({
    LoadingL: LoadingScreen,
    LoginFlow: LoginFlow,
})

export default createAppContainer(MainRoute)