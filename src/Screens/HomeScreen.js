import React from 'react';
import { useNavigation } from '@react-navigation/native'
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, Pressable, ImageBackground } from 'react-native';

import TaskStackScreen from '../Stack/Task';
import UserStackScreen from '../Stack/User';
import OverviewScreen from './OverviewScreen';
import { LOGO_URL } from '../helpers/constant';
import ProjectStackScreen from '../Stack/Project';
import { darkBlue, lightPink, lighterPink, white } from '../helpers/colors';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: darkBlue,
        headerTitleAlign: 'left',
        headerTintColor: darkBlue,
        showIcon: true,
        showLabel: false,
        iconStyle: {
          width: 'auto',
          height: 28,
        },
        tabStyle: {
          margin: 0.2,
          borderRadius: 2,
        },
        tabBarStyle: {
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: 'rgb(241, 241, 241)',
          shadowColor: 'transparent'
        },
        headerTitleStyle: {
          fontWeight: 700,
          fontSize: 20,
          marginLeft: 5
        }
      }}
    >
      <Tab.Screen name="Home" component={OverviewScreen} options={{
        headerTitleStyle: {
          marginLeft: -5,
          fontWeight: 700,
          fontSize: 20,
        },
        headerTitle: 'Task Manager',
        headerRight: () => (
          <Pressable style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: lighterPink,
            marginBottom: 5,
            padding: 10,
            borderRadius: 20,
            overflow: 'hidden',
            color: darkBlue,
            fontSize: 16,
            marginRight: 15
          }}
          onPress={() => {
            console.log('cc');
            navigation.navigate('Login')
          }}
          >
            <Text style={{
            fontWeight: 700
            }}>PK</Text>
            <AntIcon style={{
              marginLeft: 5
            }} size={20} color={darkBlue} name="logout" />
          </Pressable>
        ),
        headerLeft: () => (
          <Image
            style={{
              height: 40,
              width: 40,
              resizeMode: "contain",
              marginLeft: 15
            }}
            source={{
              uri: LOGO_URL
            }}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <FoundationIcon size={size} color={color} name="home" />
        )
      }} />
      <Tab.Screen name="Project" component={ProjectStackScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MCIcon size={size} color={color} name="card-bulleted-outline" />
        )
      }} />
      <Tab.Screen name="Task" component={TaskStackScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon size={size} color={color} name="tasks" />
        )
      }} />
      <Tab.Screen name="User" component={UserStackScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FeatherIcon size={size} color={color} name="users" />
        )
      }} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
