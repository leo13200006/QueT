import ShopeKeeperLoading from '../../screens/User/Shopkeeper/ShopeKeeperLoading';
import ShopeDetailes from '../../screens/User/Shopkeeper/ShopeDetailes';
import ShopLocationScreen from '../../screens/User/Shopkeeper/ShopLocationScreen';
import shopRootDrawerNavigator from '../ShopDrawerRoutes/drawer';
import { createSwitchNavigator } from 'react-navigation';

const ShopRoute = createSwitchNavigator({
        Loading: ShopeKeeperLoading,
        Details: ShopeDetailes,
        ShopLocation: ShopLocationScreen,
        Shop: shopRootDrawerNavigator
    },
    {
        defaultNavigationOptions: {
            headerStyle: { backgroundColor: '#Fedbd0', height: 80 }
          }
    }
)

export default ShopRoute