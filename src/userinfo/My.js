import React, { Component } from 'react'
import {Icon} from '@ant-design/react-native';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    ScrollView,
    StatusBar,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';

const {width} = Dimensions.get('window');
const s = width/640;
const options = {
    title: '请选择',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    cancelButtonTitle:'取消',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    }, 
};

export default class My extends Component {
    constructor(){
        super();        
        this.state = {
            imgUrl: require('../../assets/headImage.png')
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('img')
        .then((res) => {
            if(res){
                const imgData = {"uri":res};
                console.log(imgData);
                this.setState({
                    imgUrl: imgData
                }); 
            }   
        })
    }
    
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else {
                const source = { uri: response.uri };
                console.log(response.uri);
                AsyncStorage.setItem('img',response.uri);
                this.setState({
                    imgUrl: source
                });
            }
        });
    }
    
    out = ()=>{
        AsyncStorage.removeItem('user')
        .then(res=>{
            if(!res){
                console.log('退出成功');
                Actions.login(); 
            }else{
                alert('退出失败');
            }
        });
          
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor='red' translucent={false}/>
                <ScrollView>
                    <View style={styles.top}>
                        {/* 头像 */}
                        <View style={styles.head}>
                            <Button onPress={this.takephoto}>
                                <Image 
                                    source={this.state.imgUrl}
                                    style={{width:150*s,height:150*s,borderRadius:75*s}}
                                />
                            </Button>
                        </View>
                        <Text style={{color:'white',fontWeight:'bold',marginTop:24*s}}>
                            BINNU DHILLON
                        </Text>
                        {/* 退出登录按钮 */}
                        <TouchableOpacity 
                            style={{
                                width:'22%',
                                height:40,
                                backgroundColor:'#ffffff',
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:10,
                                marginTop:20,  
                            }}
                            onPress={this.out}
                        >
                            <Text style={{color:'#4f4e4e',fontSize:17}}>退出登录</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width,backgroundColor:'#ffffff'}}>
                        {/* 个人中心 */}
                        <View style={styles.myTop}>
                            <Icon name="idcard" style={{marginRight:24*s,color:'#aeaeae'}}/>
                            <Text style={styles.t1}>我的个人中心</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            flexWrap:'wrap',
                            height:384*s
                        }}>
                            <View style={styles.tab}>
                                <Icon name="setting" color='#aeaeae'/>
                                <Text style={styles.tabText}>账户管理</Text>
                            </View>
                            <View style={styles.tab}>
                                <Icon name="environment" color='#aeaeae'/>
                                <Text style={styles.tabText}>收货地址</Text>
                            </View>
                            <View style={styles.tab}>
                                <Icon name="solution" color='#aeaeae'/>
                                <Text style={styles.tabText}>我的信息</Text>
                            </View>
                            <View style={styles.tab}>
                                <Icon name="container" color='#aeaeae'/>
                                <Text style={styles.tabText}>我的订单</Text>
                            </View>
                            <View style={styles.tab}>
                                <Icon name="qrcode" color='#aeaeae'/>
                                <Text style={styles.tabText}>我的二维码</Text> 
                            </View>
                            <View style={styles.tab}>
                                <Icon name="star" color='#aeaeae'/>
                                <Text style={styles.tabText}>我的积分</Text>  
                            </View>
                            <View style={styles.tab}>
                                <Icon name="star" color='#aeaeae'/>
                                <Text style={styles.tabText}>我的收藏</Text> 
                            </View>
                        </View>
                        <View style={{height:12*s,backgroundColor:'#eeeeee'}}></View>
                        {/* E族活动 */}
                        <View style={styles.myTop}>
                            <Icon name="tag" style={{marginRight:24*s,color:'#aeaeae'}}/>
                            <Text style={styles.t1}>E族活动</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            flexWrap:'wrap',
                            height:256*s
                        }}>
                            <View style={styles.tab}>
                                <Icon name="tool" color='#aeaeae'/>
                                <Text style={styles.tabText}>居家维修保养</Text>
                            </View>
                            <View style={styles.tab}>
                                <Icon name="car" color='#aeaeae'/>
                                <Text style={styles.tabText}>出行接送</Text>
                            </View>
                            <View style={styles.tab}>
                                <Icon name="user" color='#aeaeae'/>
                                <Text style={styles.tabText}>我的受赠人</Text>
                            </View>
                            <View style={styles.tab}>
                                <Icon name="flag" color='#aeaeae'/>
                                <Text style={styles.tabText}>我的住宿优惠</Text>
                            </View>
                            <View style={styles.tab}>
                                <Icon name="flag" color='#aeaeae'/>
                                <Text style={styles.tabText}>我的活动</Text> 
                            </View>
                            <Button onPress={()=>Actions.launch()}>
                                <View style={styles.tab}>
                                    <Icon name="form" color='#aeaeae'/>
                                    <Text style={styles.tabText}>我的发布</Text>  
                                </View>
                            </Button>
                        </View>
                    </View>
                    {/* 底部 */}
                    <View style={styles.end}>
                        <Text style={{color:'#767676'}}>
                            BINNU DHILLON | 退出
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top:{
        width:width,
        height:360*s,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    head:{
        width:156*s,
        height:156*s,
        borderColor:"white",
        borderWidth:3,
        borderRadius:78*s,
        justifyContent:'center',
        alignItems:'center'
    },
    myTop:{
        width:width,
        height:79*s,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:23*s,
        marginBottom:25*s,
        borderBottomColor:'#eeeeee',
        borderBottomWidth:1
    },
    t1:{
        color:'#4f4e4e',
        fontSize:18,
    },
    tab:{
        width:width/3,
        height:128*s,
        alignItems:'center',
        justifyContent:'center'
    },
    tabText:{
        color:'#4f4e4e',
        fontSize:18,
        marginTop:23*s
    },
    end:{
        width:width,
        height:94*s,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eeeeee',
    }
});
