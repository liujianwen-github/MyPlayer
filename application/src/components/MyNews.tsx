import * as React from 'react';
import { 
  View,
  Text,
  Button
 } from 'react-native';
 import * as Navigation from 'react-navigation';
 /**
  * 我的消息
  * 
  * 
  * @class MyNews
  * @extends {React.Component}
  */
 class MyNews extends React.Component<any,any> {
   constructor(props){
     super(props)
     this.go = this.go.bind(this)
   }
   go(){
    const {navigate} = this.props.navigation
    console.log('1')
    navigate('Home')
   }
   render():JSX.Element {
     return (
       <View>
         <Text>mynews</Text>
         <Button 
         title="go"
         onPress={this.go}
         ></Button>
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
      //  headerBackTitle:null
     })
   }
 },{})
 export default newsStack
 
 