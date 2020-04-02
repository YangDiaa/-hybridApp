import React, { Component } from 'react'
import Button from 'react-native-button';
import {View,Text,StyleSheet,ScrollView,StatusBar,FlatList,ToastAndroid,Dimensions,ActivityIndicator} from 'react-native'

var reply=[];
for(var i=0;i<12;i++){
    reply[i]='';
}
const {width} = Dimensions.get('window');
const s = width/640;

export default class MyLaunch extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page: 1,
            isLoad:false
        }
    }

    setReply = ()=> {
        for(var i=0;i<12;i++){
            var random = Math.random();
            if(random < 0.5){
                reply[i]='待回复';
            }
            else{
                reply[i]='已回复'; 
            }
        }
    }
    
    componentDidMount(){
        this.setReply();
        fetch('https://cnodejs.org/api/v1/topics?limit=12&&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data: res.data,
                isLoad: true
            });
        });
    }

    componentDidUpdate(){
        fetch('https://cnodejs.org/api/v1/topics?limit=12&&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data: res.data,
                isLoad:true
            });
        });
    }

    reduceNum = ()=> {
        if(this.state.page == 1){
            ToastAndroid.showWithGravity('已经是第一页了!', ToastAndroid.LONG, ToastAndroid.CENTER);
        }
        else{
            this.setState({
                page: this.state.page - 1,
                isLoad:false
            });
            this.setReply();
        } 
    }   

    addNum = ()=> {
        this.setState({
            page: this.state.page + 1,
            isLoad:false
        });
        this.setReply();
    }
    
    render() {
        return (
            <View>
                <StatusBar backgroundColor='red' translucent={false}/>
                <ScrollView>
                    {
                        this.state.isLoad==false
                        ?<View style={[{justifyContent:'center'},styles.box]}>
                            <ActivityIndicator color="red" size='large'/>
                        </View>
                        :<View>
                            <FlatList 
                                style={styles.box}
                                data={this.state.data}
                                renderItem={({index,item})=>
                                    <View style={styles.content}>
                                        <View style={styles.t1}>
                                            <Text>
                                                {item.title.slice(0,15)+'...'}
                                            </Text>
                                        </View>
                                        <View style={styles.t2}>
                                            <Text>
                                                {item.create_at.slice(0,10)}
                                            </Text>
                                        </View>
                                        <View style={styles.t3}>
                                            <Text style={reply[index]=='待回复'?styles.reply1:styles.reply2}>
                                                {reply[index]}
                                            </Text>
                                        </View>
                                    </View>  
                                }
                            />
                            <View style={{flexDirection:"row",marginTop:40*s,justifyContent:"center"}}>
                                <View style={styles.btn}>  
                                    <Button 
                                        onPress={this.reduceNum}
                                        style={styles.btnText}
                                    >上一页</Button>
                                </View>
                                <View style={styles.pageNum}>
                                    <Text style={{fontSize:15}}>第{this.state.page}页</Text>
                                </View>
                                <View style={styles.btn}>  
                                    <Button 
                                        onPress={this.addNum}
                                        style={styles.btnText}
                                    >下一页</Button>
                                </View>
                            </View>
                        </View>
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        width:width,
        height:600,
        backgroundColor:'white'
    },
    content:{
        width:width,
        height:50,
        flexDirection:'row'
    },
    t1:{
        width:'65%',
        height:50,
        paddingLeft:20,
        justifyContent:'center',
        fontSize:15
    },
    t2:{
        width:'20%',
        height:50,
        justifyContent:'center',
        fontSize:15
    },
    t3:{
        width:"15%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        fontSize:15
    },
    reply1:{
        color:'red'
    },
    reply2:{
        color:'black'
    },
    btn:{
        width: '20%',
        height:30,
        justifyContent:'center',
        backgroundColor:"red",
        color:'white',
        borderRadius:5
    },
    btnText:{
        color:'white'
    },
    pageNum:{
        width:'30%',
        height:30,
        justifyContent:"center",
        alignItems:'center'
    }
})