import * as React from 'react'
import {
  View,
  Text
} from 'react-native'
import * as Navigation from 'react-navigation';
// components
import Personal from '../components/Personal'
import Conversation from '../components/Conversation'
import Discover from '../components/Discover'
/**
 * 根导航目录
 * 
 * @export
 * @class BaseNav
 * @extends {React.Component}
 */
export default class BaseNav extends React.Component {
  render():JSX.Element {
    return (
      <View></View>
    );
  }
}
const MainDrawer = Navigation.DrawerNavigator({
  Home:{
    // screen:
  }
})