import {StyleSheet, FlexStyle, ImageStyle, TextStyle} from 'react-native'
import basicStyle from './basicStyle'
// import theme from ''
const style:any = {
  /**
   * 上半部分列表
   */
  //整行
  line:<FlexStyle>{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    height:40,
    // backgroundColor:'green'
    // borderBottomWidth:1,
    // borderColor:'red',
  },
  // 左侧图片
  itemImage:<ImageStyle>{
    height:20,
    width:20,
    margin:10
  },
  // 文字描述组
  itemTextGroup:<FlexStyle>{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    height:40,
    //以上跟父级元素line相同
    borderBottomWidth:1,
    borderColor:basicStyle.lightGrey,
  },
  // title
  itemText:<TextStyle>{
    color:basicStyle.font,
    fontSize:16,
    // padding:10 
  },
  itemCount:<TextStyle>{
    color:basicStyle.grey,
    marginLeft:5,
    marginRight:5,
    fontSize:14
  },
  /**
   * 下半部分列表
   */
  lineContainer:<FlexStyle>{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    height:25,
    // color:'white',
    backgroundColor:'#CACACA'
  },
  outerTouch:<FlexStyle>{
    flex:1,
    flexDirection:'row',
  },
  sectionTitleGroup:<FlexStyle>{
    flex:1,
    flexDirection:'row',
    height:25,
    position:'relative',
    alignItems:'center'
  },
  settings:<FlexStyle>{
    position:'absolute',
    right:0
  }

}
export default StyleSheet.create(style)