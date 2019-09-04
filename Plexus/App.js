import React, {Component} from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  MessagesScreen from './MessagesScreen';
import  FriendsScreen from './FriendsScreen';
import  SettingsScreen from './SettingsScreen';
import  Map from './Map';
import { List, ListItem, Card, Button } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';




const TabNavigator = createBottomTabNavigator({
  Friends: FriendsScreen,
  Messages: MessagesScreen,
  Map: Map,
  Settings: SettingsScreen,
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Messages') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);
