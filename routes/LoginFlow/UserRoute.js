import { createSwitchNavigator } from 'react-navigation';
import LoadingT from '../../screens/User/LoadingForType'
import Selcation from '../../screens/User/Selction'
import ShopRoute from './ShopeKeeperRoute';
import RootDrawerNavigator from '../DrawerNaviagtion/drawer'
import PhoneNumVeriScreen from '../../screens/PhoneNumVeriScreen';

const UserRoute = createSwitchNavigator({
    LoadingT: LoadingT,
    PhoneVeri: PhoneNumVeriScreen,
    Selection: Selcation,
    Customer: RootDrawerNavigator,
    Shopkeeper: ShopRoute,
})

export default UserRoute