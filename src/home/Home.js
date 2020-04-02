import React, { Component } from 'react'
import {Icon} from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity, 
    StatusBar
} from 'react-native';

const {width} = Dimensions.get('window');
const s = width/640;

export default class Home extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='red' translucent={false}/>
                <ScrollView>
                    {/* 搜索框 */}
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"center",
                        backgroundColor:"red",
                    }}>
                        <View style={styles.search}>
                            <Icon name="search" color='white'/>
                            <TextInput 
                                placeholder="请输入您要搜索的关键字"
                                placeholderTextColor='white'
                                style={{fontSize:16}}
                            ></TextInput>
                        </View>
                        <View style={styles.shop}>
                            <Icon name="shopping-cart" color='white'/>
                        </View>
                    </View>
                    {/* 轮播图 */}
                    <View style={styles.wrapper}>
                        <Swiper showsButtons={false} autoplay={true}>
                            <View>
                                <Image 
                                    style={styles.slide}
                                    source={require('../../assets/server1.png')}
                                />
                            </View>
                            <View>
                                <Image 
                                    style={styles.slide}
                                    source={require('../../assets/server2.png')}
                                />
                            </View>
                            <View>
                                <Image 
                                    style={styles.slide}
                                    source={require('../../assets/server1.png')}
                                />
                            </View>
                        </Swiper>
                    </View>
                    {/* 分类 */}
                    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10*s}}>
                        <View style={styles.box}>
                            <View style={[{backgroundColor:'#ffcccc'},styles.logo]}>
                                <Image style={styles.img}
                                    source={require('../../assets/server3.png')}
                                />
                            </View>
                            <Text style={styles.t1}>居家维修保养</Text>  
                        </View>
                        <View style={styles.right}>
                            <Icon name="right" /> 
                        </View>
                    </View>
                    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10*s}}>
                        <View style={styles.box}>
                            <View style={[{backgroundColor:'#ffe1b1'},styles.logo]}>
                                <Image style={styles.img}
                                    source={require('../../assets/server4.png')}
                                />
                            </View>
                            <Text style={styles.t1}>住宿优惠</Text>  
                        </View>
                        <View style={styles.right}>
                            <Icon name="right" /> 
                        </View>
                    </View>
                    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10*s}}>
                        <View style={styles.box}>
                            <View style={[{backgroundColor:'#bfe6a8'},styles.logo]}>
                                <Image style={styles.img}
                                    source={require('../../assets/server5.png')}
                                />
                            </View>
                            <Text style={styles.t1}>出行接送</Text>  
                        </View>
                        <View style={styles.right}>
                            <Icon name="right" /> 
                        </View>
                    </View>
                    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:10*s}}>
                        <View style={styles.box}>
                            <View style={[{backgroundColor:'#c3ddf2'},styles.logo]}>
                                <Image style={styles.img}
                                    source={require('../../assets/server6.png')}
                                />
                            </View>
                            <Text style={styles.t1}>E族活动</Text>  
                        </View>
                        <View style={styles.right}>
                            <Icon name="right" /> 
                        </View> 
                    </View>
                    {/* 按钮 */}
                    <View style={{alignItems:'center',marginTop:35*s}}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>发布需求</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center',marginTop:62*s,marginBottom:30*s}}> 
                        <Text style={{fontSize:16,color:'#9d9d9d'}}>©E族之家 版权所有</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    search:{
        flexDirection:"row",
        alignItems:"center",
        width:'80%',
        height:60*s,
        marginTop:10*s,
        marginBottom:10*s,
        paddingLeft:20*s,
        backgroundColor:'#fbb8b8',
        borderRadius:20*s 
    },
    shop:{
        justifyContent:'center',
        alignItems:'center',
        width:'5%',
        height:60*s,
        marginTop:10*s,
        marginLeft:20*s
    },
    wrapper:{
        width: width,
        height: 273*s
    },
    slide:{
        width: width,
        height: 273*s
    },
    box:{
        width:'90%',
        height:130*s,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:24*s
    },
    logo:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:48*s,
        height:48*s
    },
    t1:{
        fontSize:22,
        marginLeft:45*s,
        color:'#6e6e6e'
    },
    right:{
        width:'10%',
        height:130*s,
        justifyContent:'center'
    },
    btn:{
        width:544*s,
        height:65*s,
        backgroundColor:'red',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{
        fontSize:22,
        color:'white'
    }
});