import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import rootStore from './src/rootStore';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppHeader from './src/components/AppHeader';

import ArticlesScreen from './src/screens/ArticlesScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';
import VideoScreen from './src/screens/VideoScreen';
import VideoDetailScreen from './src/screens/VideoDetailScreen';
import CommentsScreen from './src/screens/CommentsScreen';

const homeFlow = createStackNavigator({
  topFlow: createMaterialTopTabNavigator(
    {
      Articles: createMaterialTopTabNavigator(
        {
          Article: ArticlesScreen,
          ArticleDetail: ArticleDetailScreen,
          Comments: CommentsScreen
        },
        {
          swipeEnabled: false,
          tabBarOptions: {
            tabStyle:{
              display: 'none'
            }
          }
        }
      ),
      Video: createMaterialTopTabNavigator(
        {
          Video: VideoScreen,
          VideoDetail: VideoDetailScreen,
          Comments: CommentsScreen
        },
        {
          swipeEnabled: false,
          tabBarOptions: {
            tabStyle:{
              display: 'none'
            }
          }
        }
      )
    },
    { initialRouteName: 'Articles',
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        indicatorStyle: { backgroundColor: 'red' },
        style: { backgroundColor: 'inherit' },
        // showIcon: true,
      },
      style: {
        display:'flex',
        flexDirection: 'column'
      },
      sceneContainerStyle: {
        flex: 1
      }
    }
  )
},
{
  defaultNavigationOptions: {
    header: props => <AppHeader {...props}/>
  }
}
)

homeFlow.navigationOptions = () => {
  return {
    title: 'Home',
    tabBarIcon: <MaterialCommunityIcons name='castle' size={24}/>
  }
}

const mainFlow = createBottomTabNavigator({
  homeFlow
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey'
  }
})

const App = createAppContainer(mainFlow);

export default () => {
  return (
    <Provider store={ rootStore }>
      <App/>
    </Provider>
  );
};