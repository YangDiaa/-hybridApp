import React, { Component } from 'react'
import {View,Text,TextInput,TouchableOpacity,AsyncStorage,ToastAndroid,BackHandler} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import {myFetch} from '../utils/index'

export default class Login extends Component {
    constructor(){
      super();
      this.state={
        username:'',
        pwd:'',
        isloading:false
      }
    }
    userhandle = (text)=>{
      this.setState({
        username:text
      })
    }
    pwdhandle = (text)=>{
      this.setState({
        pwd:text
      })
    }
    login = () => {
      this.setState({isloading:true});
      myFetch.post('/login',{
          username: this.state.username,
          pwd: this.state.pwd }
      ).then(res=>{
        var status = res.data.status;
        if(status == 0){
          this.setState({isloading:false});
          alert('用户名或密码不能为空');
        } 
        else if(status == 1){
          this.setState({isloading:false});
          alert('密码不正确');  
        }
        else{
          AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              this.setState({isloading:false});
              Actions.homePage();
            })
        }
      })
    }

    render() {
        return (
          <View style={{justifyContent:'center',flex:1}} >
            <View style={{alignItems:'center'}}>
              <View style={{
                width:'80%',
                borderBottomColor:'#ccc',
                borderBottomWidth:2,
                flexDirection:'row',
                alignItems:'center',
                paddingLeft:20
              }}>
                <Icon name="user" color="red"/>
                <TextInput placeholder='用户名'
                  onChangeText={this.userhandle}
                />
              </View>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={{
                width:'80%',
                borderBottomColor:'#ccc',
                borderBottomWidth:2,
                flexDirection:'row',
                alignItems:'center',
                paddingLeft:20
              }}>
                <Icon name="user" color="red"/>
                <TextInput placeholder='密码'
                  onChangeText={this.pwdhandle}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity 
                style={{
                  width:'50%',
                  height:40,
                  backgroundColor:'red',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:30,  
                }}
                onPress={this.login}
              >
                <Text style={{color:'white',fontSize:15}}>登 录</Text>
              </TouchableOpacity> 
              <TouchableOpacity 
                style={{
                  width:'50%',
                  height:40,
                  backgroundColor:'#ccc',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:20,  
                }}
                onPress={()=>Actions.register()}
              >
                <Text style={{fontSize:15}}>去注册</Text>
              </TouchableOpacity>
            </View>  
            {
              this.state.isloading
              ?<View style={{alignItems:'center',marginTop:50}}>
                <Text style={{fontSize: 20,color:'red'}}>正在登录...</Text>
              </View>
              :null
            }       
          </View>
        )
    }
}
