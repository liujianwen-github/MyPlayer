import * as Navigation from 'react-navigation'
import * as React from 'react'
import { 
  Image
} from 'react-native'
// components
import Personal from '../components/Personal'
import Conversation from '../components/Conversation'
import Discover from '../components/Discover'
// style
import theme from '../theme/ChineseRed'
import styles from '../styles/tabBar'
/**
 * TabNavigator配置
 */
const BaseTab = Navigation.TabNavigator({
  Personal:{
    screen:Personal,
    navigationOprions:{
      tabBarLabel: '个人',
      tabBarIcon:({tintColor})=>(
        <Image
          source={require('../../assets/img/Discover.png')}
          style={[styles.tabBarItem,{tintColor:tintColor}]}
        />
      )
    }
  },
  Discover:{
    screen:Discover,
    navigationOptions:{
      tabBarLabel: '发现',
      tabBarIcon:({tintColor})=>(
        <Image
          source={require('../../assets/img/Discover.png')}
          style={[styles.tabBarItem,{tintColor:tintColor}]}
        />
      )
    }
  },
  Conversation:{
    screen:Conversation,
    navigationOptions:{
      tabBarLabel: '社交',
      tabBarIcon:({tintColor})=>(
        <Image
          source={require('../../assets/img/Conversation.png')}
          style={[styles.tabBarItem,{tintColor:tintColor}]}
        />
      )
    }
  }
},{
  initialRouteName:"Discover",
  swipeEnabled:true,
  lazy:true,
  tabBarOptions:{
    activeTintColor:"#FFF",
    inactiveTintColor:"#898989",
    showLabel:false,
    showIcon:true,
    style:{
      backgroundColor:theme.background,
      height:50,
      // flex:1,
      // flexDirection:"row"
    },
    // tabStyle:{
    //   width:40,
    //   height:40
    // }
  }
})
export default BaseTab