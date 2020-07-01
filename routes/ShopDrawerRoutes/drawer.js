import * as React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';

import AboutStack from '../DrawerNaviagtion/aboutStack';
import shopHomeStack from './shopHomeStack.js';
import CustomSidebarMenu from './customSidebarMenu.js';

const shopRootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: shopHomeStack,
  },
  Account:{
    screen:shopHomeStack,
  },
  About: {
    screen: AboutStack,
  },
},
{
  contentComponent: CustomSidebarMenu,
  drawerWidth: '98%',
}
);

export default shopRootDrawerNavigator