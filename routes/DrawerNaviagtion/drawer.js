import * as React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {Dimensions} from 'react-native'
// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import CustomSidebarMenu from '../ShopDrawerRoutes/customSidebarMenu';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({

  Home: {
    screen: HomeStack,
  },
  Account:{
    screen:HomeStack,
  },
  About: {
    screen: AboutStack,
  },
},
{
  contentComponent: CustomSidebarMenu,
  drawerWidth: Dimensions.get('window').width - 130,
}
);

export default RootDrawerNavigator