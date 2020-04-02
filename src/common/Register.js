import React, { Component } from 'react'
import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import {myFetch} from '../utils/index'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            confirm:''
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
    confirmhandle = (text)=>{
        this.setState({
            confirm:text
        })
    }
    register = () => {
        myFetch.post('/register',{
            username: this.state.username,
            pwd: this.state.pwd,
            confirm: this.state.confirm }
        ).then(res => {
            var status = res.data.status;
            if(status == 0){
                alert('用户名或密码不能为空');
            }
            else if(status == 1){
                alert('两次密码不一致');
            }
            else if(status == 2){
                alert('该用户名已注册过');
            }
            else{
                Actions.login();
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
                        <TextInput placeholder='请输入用户名'
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
                        <TextInput placeholder='请输入密码'
                            onChangeText={this.pwdhandle}
                            secureTextEntry
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
                        <TextInput placeholder='请再次输入密码'
                            onChangeText={this.confirmhandle}
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
                        onPress={this.register}
                    >
                        <Text style={{color:'white',fontSize:15}}>注 册</Text>
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
                        onPress={()=>Actions.login()}
                    >
                        <Text style={{fontSize:15}}>去登录</Text>
                    </TouchableOpacity> 
                </View>       
            </View>
        )
    }
}
