import * as React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import AboutStack from '../DrawerNaviagtion/aboutStack';
import shopHomeStack from './shopHomeStack.js';
import CustomSidebarMenu from './customSidebarMenu.js';

// drawer navigation options
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