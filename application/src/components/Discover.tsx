import * as React from 'react';
import { 
  View,
  Text,
  Button,
  TextInput,
  FlatList
 } from 'react-native';
 import {connect} from 'react-redux';

interface DiscoverProps{}
interface DiscoverStates{}
interface UIDiscoverProps{
  addUser:any,
  users:Array<string>
}
interface UIDiscoverStates{
  text:string
}
/**
 * redux UI组件
 * 
 * @class UIDiscover
 * @extends {React.Component<null, null>}
 */
class UIDiscover extends React.Component<UIDiscoverProps,UIDiscoverStates>{
  constructor(props){
    super(props)
    this.state = {
      text:''
    }
    this.btnfn = this.btnfn.bind(this)     
  }
  btnfn(){
   console.log(this)
   const {addUser} = this.props
   let user = this.state.text
   addUser(user)
   this.setState({text:''})
   console.log(this.state)
 }
  render(){
    return(
      <View>
        <TextInput
         style={{height: 40}}
         placeholder="Type here to translate!"
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
        <Button
         title="12"
         onPress={this.btnfn}
        />
        <FlatList
         data={this.props.users}
         renderItem={({item}) => <Text>{item}</Text>}
       />
      </View>
    )
  }
}
/**
 * 输出Discover组件
 * 
 * @class Discover
 * @extends {React.Component<DiscoverProps, DiscoverStates>}
 */
export default class Discover extends React.Component<DiscoverProps,DiscoverStates> {
  constructor(props){
    super(props)
  }
   render():JSX.Element {
     return (
       <View>
         <Text>discover</Text>
         <UI/>
       </View>
     );
   }
 }
 
 const mapStateToProps = (state,props)=>{
  return{
    users:state.users
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return{
    addUser:(arg)=>dispatch({type:"ADD_USER",user:arg})
  }
}
const UI = connect(mapStateToProps,mapDispatchToProps)(UIDiscover)
// export default UIDiscover
// export default Discover