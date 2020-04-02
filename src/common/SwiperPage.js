import React, { Component } from 'react'
import { Text, View,Image, StyleSheet, ScrollView, AsyncStorage,TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
    start = ()=> {
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });   
    }
    render() {
        return (
            <ScrollView>
                <Swiper>
                    <View style={styles.slide}>
                        <Image 
                            source={require('../../assets/slide1.jpg')}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image 
                            source={require('../../assets/slide2.jpg')}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image 
                            source={require('../../assets/slide3.jpg')}
                            style={styles.img}
                        />   
                        <TouchableOpacity 
                            style={styles.start}
                            onPress={this.start}
                        >
                            <Text style={{fontSize:19}}>开始体验</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    slide:{
       flex:1,
       width:'100%',
       alignItems:'center'
    },
    img:{
        width:'100%',
        height:'100%'
    },
    start:{
        position: 'absolute',
        bottom: 120,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    }
})