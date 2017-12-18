import * as React from 'react';
import { 
  View,
  Text
 } from 'react-native';
 import * as Navigation from 'react-navigation';
 /**
  * 我的消息
  * 
  * 
  * @class MyNews
  * @extends {React.Component}
  */
 class MyNews extends React.Component {
   render():JSX.Element {
     return (
       <View>
         <Text>mynews</Text>
       </View>
     );
   }
 }
//  stack配置
 const newsStack = Navigation.StackNavigator({
   Home:{
     screen:MyNews,
     navigationOptions:({navigation})=>({
       title:"我的消息",
     })
   }
 },{})
 export default newsStack
 
 