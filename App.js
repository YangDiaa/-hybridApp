import React,{useState,useEffect} from 'react';
import {Icon} from '@ant-design/react-native';
import {Router,Scene,Tabs,Modal,Actions} from "react-native-router-flux";
import {View,BackHandler,ToastAndroid,AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import Home from './src/home/Home'
import Type from './src/goods/Type'
import My from './src/userinfo/My'
import MyLaunch from './src/userinfo/MyLaunch'
import Login from './src/common/Login'
import Register from './src/common/Register'
import SwiperPage from './src/common/SwiperPage'

console.disableYellowBox = true;

const App = () => {
  let [isLogin,setLogin] = useState(false);
  let [isFirstInstall,setInstall] = useState(true);
  let now = 0;

  let init = ()=> {
    AsyncStorage.getItem('isInstall')
    .then(res => {
      if(res){
        setInstall(false);
      }
    })

    AsyncStorage.getItem('user')
    .then(res => {
      let user = JSON.parse(res);
      if(!user){
        SplashScreen.hide();
      }
      if(user&&user.status=='success'){
        setLogin(true);
        SplashScreen.hide();
      }
    })
  }

  useEffect(()=>{
		init();
  },[])
  
  let afterInstall = ()=> {
    setInstall(false);
  }
  if(isFirstInstall){
    return(
      <View styles={{flex:1}}>
        <SwiperPage afterInstall ={afterInstall}/>
      </View>
    )
  }
  return (
    <Router
      backAndroidHandler={()=>{
        if(Actions.currentScene == 'login'){
          if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
        }
        else if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
        }
        else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
      }}
    >
      <Modal key="modal" hideNavBar>
        <Scene key='root'>
          <Tabs
            key="tabbar"
            hideNavBar
            activeTintColor='red'
            inactiveTintColor="#9d9d9d"
          >
            <Scene
              key="homePage"
              title="首页"
              hideNavBar
              icon={ ({focused})=>
                  <Icon 
                    name="home" 
                    color={focused?'red':'#9d9d9d'}
                  />
              }
            >
              <Scene key="home" component={Home}/>
            </Scene>
            <Scene
              key="typePage"
              title="商品分类"
              hideNavBar
              icon={ ({focused})=>
                  <Icon 
                    name="appstore" 
                    color={focused?'red':'#9d9d9d'}
                  />
              }
            >
              <Scene key="type" component={Type}/>
            </Scene>
            <Scene
              key="userPage"
              title="个人中心"
              icon={ ({focused})=>
                  <Icon 
                    name="user" 
                    color={focused?'red':'#9d9d9d'}
                  />
              }
            >
              <Scene hideNavBar key="mylist" component={My}/>
              <Scene 
                hideTabBar
                key="launch"
                title="我的发布" 
                component={MyLaunch}  
                navigationBarStyle={{backgroundColor:'#f23030'}}
                backButtonImage={require('./assets/back.png')}
                renderRightButton={<Icon name="ellipsis" style={{marginRight:20,color:'white'}}/>}
                titleStyle={{flex:1,textAlign:'center',color:'white'}}
              />
            </Scene>
          </Tabs>
        </Scene>
        <Scene initial={!isLogin} key="login" component={Login}/>
        <Scene key="register" component={Register}/>
      </Modal>
    </Router>
  );
};

export default App;