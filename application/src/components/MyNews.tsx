import * as React from 'react';
import { 
  View,
  Text,
  Button,
  FlatList
 } from 'react-native';
 import * as Navigation from 'react-navigation';
 import {connect} from 'react-redux'

 interface MyNewsProps{}
 interface MyNewsState{}
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
         />
         <FlatList
         data={this.props.users}
         renderItem={({item}) => <Text>{item}</Text>}
        />
       </View>
     );
   }
 }
 const mapStateToProps=(state,props)=>{
   return{
     users:state.users
   }
 }
 const UINews = connect(mapStateToProps)(MyNews)
//  stack配置
 const newsStack = Navigation.StackNavigator({
   Home:{
     screen:UINews,
     navigationOptions:({navigation})=>({
       title:"我的消息",
      //  headerBackTitle:null
     })
   }
 },{})
 export default newsStack
 
 