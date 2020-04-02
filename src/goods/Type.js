import React, { Component } from 'react'
import {Icon} from '@ant-design/react-native';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');
const s = width/640;

export default class Type extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='red' translucent={false}/>
                <ScrollView>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        height:80*s,
                        backgroundColor:'white'
                    }}>
                        <View style={{
                            flexDirection:'row',
                            width:'85%',
                            height:60*s,
                            backgroundColor:'#eeeeee'
                        }}>
                            <TextInput 
                                placeholder="请输入商品名称"
                                placeholderTextColor='#a6a6a6'
                                style={{width:'88%',fontSize:16}}
                            />
                            <View style={{justifyContent:'center'}}>
                                <Icon name="search" />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flexDirection:'row',
                        height:80*s,
                        borderColor:'#e8e8e8',
                        borderWidth:1,
                        backgroundColor:'white'
                    }}>
                        <View style={styles.box1}>
                            <Text style={{color:'red',fontSize:18}}>综合</Text>
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.txt}>销量</Text>
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.txt}>新品</Text>
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.txt}>价格</Text>
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.txt}>信用</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-evenly',
                        flexWrap:'wrap',
                        height:1400*s,
                        backgroundColor:'#f4f4f4'
                    }}>
                        <View style={styles.box2}>
                            <View style={styles.box3}>
                                <Image 
                                source={require('../../assets/1.png')}
                                style={styles.img}
                                />
                            </View>
                            <View style={styles.box4}>
                                <Text style={styles.t1}>
                                Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳
                                </Text>
                                <Text style={styles.t2}>
                                36.00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.box2}>
                            <View style={styles.box3}>
                                <Image 
                                source={require('../../assets/2.png')}
                                style={styles.img2}
                                />
                            </View>
                            <View style={styles.box4}>
                                <Text style={styles.t1}>
                                Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳
                                </Text>
                                <Text style={styles.t2}>
                                36.00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.box2}>
                            <View style={styles.box3}>
                                <Image 
                                source={require('../../assets/1.png')}
                                style={styles.img}
                                />
                            </View>
                            <View style={styles.box4}>
                                <Text style={styles.t1}>
                                Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳
                                </Text>
                                <Text style={styles.t2}>
                                36.00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.box2}>
                            <View style={styles.box3}>
                                <Image 
                                source={require('../../assets/2.png')}
                                style={styles.img2}
                                />
                            </View>
                            <View style={styles.box4}>
                                <Text style={styles.t1}>
                                Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳
                                </Text>
                                <Text style={styles.t2}>
                                36.00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.box2}>
                            <View style={styles.box3}>
                                <Image 
                                source={require('../../assets/1.png')}
                                style={styles.img}
                                />
                            </View>
                            <View style={styles.box4}>
                                <Text style={styles.t1}>
                                Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳
                                </Text>
                                <Text style={styles.t2}>
                                36.00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.box2}>
                            <View style={styles.box3}>
                                <Image 
                                source={require('../../assets/2.png')}
                                style={styles.img2}
                                />
                            </View>
                            <View style={styles.box4}>
                                <Text style={styles.t1}>
                                Qishi/上好佳玉米卷20包膨化休闲食品Qishi/上好佳
                                </Text>
                                <Text style={styles.t2}>
                                36.00
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box1:{
      width:'20%',
      height:70*s,
      justifyContent:'center',
      alignItems:'center'
    },
    txt:{
      color:'#333333',
      fontSize:18
    },
    box2:{
      width:'45%',
      height:420*s,
      marginTop:11*s,
      backgroundColor:'white'
    },
    box3:{
      height:305*s,
      justifyContent:'center',
      alignItems:'center'
    },
    img:{
      width:145*s,
      height:180*s
    },
    img2:{
      width:200*s,
      height:190*s
    },
    box4:{
      height:115*s,
      paddingLeft:15*s
    },
    t1:{
      fontSize:13,
      color:'#666666'
    },
    t2:{
      fontSize:13,
      color:'red',
      marginTop:10*s
    }
});
  

