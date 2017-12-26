import * as React from 'react'
import {
  View,
  Text
} from 'react-native'
import * as Navigation from 'react-navigation';
// components
import BaseTab from './BaseTab'
import MyNews from '../components/MyNews'
/**
 * 根导航目录
 * 
 * 
 * @class BaseNav
 * @extends {React.Component}
 */
class BaseDrawer extends React.Component {
  render():JSX.Element {
    return (
      <View></View>
    );
  }
}
/**
 * drawer配置
 * @export
 */
const MainDrawer = Navigation.DrawerNavigator({
  DrawerDefault:{
    screen:BaseTab,
    navigationOptions:{
      tabBarLabel: '默认',
    }
  },
  MyNews:{
    screen:MyNews,
    navigationOptions:{
      tabBarLabel: '我的消息',
    }  
  }
},{
  drawerWidth:260,
  drawerPosition: 'left',
  // contentComponent: 自定义目录
  initialRouteName:"DrawerDefault",
  contentOptions: {
    activeTintColor: 'white',  // 选中文字颜色
    activeBackgroundColor: '#ff8500', // 选中背景颜色
    inactiveTintColor: '#666',  // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: {  // 样式
    }
  }

})
export default MainDrawer