import React, {Component} from 'react';
import { Text, View, TextInput, Image , Switch} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  MessagesScreen from './MessagesScreen';
import  FriendsScreen from './FriendsScreen';
import  Map from './Map';
import { List, ListItem, Card, Button } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';


class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 50, justifyContent: 'top', paddingLeft: 20, paddingRight: 10}}>
      <Text style={{fontSize: 30, fontWeight: '800', color: 'black', paddingBottom: 10}}>Settings</Text>
       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
         <View style={{flex: 1, justifyContent: 'space-evenly'}}>
            <Image style={{width: 175, height: 175, borderRadius: 10,}} source={{uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p320x320/31184658_219149588852666_3551699102070734848_n.jpg?_nc_cat=103&_nc_oc=AQluwU4Gs8N1a4pQTsCZEY9aGjc1Bgi4F-BcWU4eBbRGcXcTGaLU-OCl8faX5WB8oehPTsluztO3ic2NfYs-4Csx&_nc_ht=scontent-dfw5-1.xx&oh=6fc0171accca09be4fdcee22e2be893e&oe=5E12E907'}}/>
            <Button
            buttonStyle={{height: 30, width: 175, borderRadius: 5, }}
            titleStyle={{ fontSize: 10, textAlign: 'center',  fontWeight:'400',}}
  title="Change Image"
  type="outline"
/>
         </View>
         <View style={{paddingTop: 40}}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black', paddingBottom: 20}}>Swarn Singh</Text>
            <Text style={{fontSize: 10, fontWeight: '500', color: 'grey', paddingBottom: 20}}>swarn2099@gmail.com</Text>
            <Text style={{fontSize: 10, fontWeight: '500', color: 'grey', paddingBottom: 20}}>ACL 2019</Text>

         </View>
       </View>
       <View style={{flex: 1, flexDirection: 'row',  padding: 10}}>
         <View>
         <Switch  style={{paddingBottom: 60}} onValueChange={this._handleToggleSwitch} value={this.state.switchValue}/>
         <Switch  style={{paddingBottom: 60}} onValueChange={this._handleToggleSwitch} value={this.state.switchValue}/>
         <Switch  style={{paddingBottom: 60}} onValueChange={this._handleToggleSwitch} value={this.state.switchValue}/>
         </View>
         <View style={{flex: 1,  alignItems: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: '300', color: 'black', paddingBottom: 45}}>Allow Location Sharing</Text>
            <Text style={{fontSize: 15, fontWeight: '300', color: 'black'}}>Recieve Festival Updates</Text>
         </View>
       </View>
       <Button
       buttonStyle={{borderRadius: 5, }}
       titleStyle={{ fontSize: 10, textAlign: 'center',  fontWeight:'400',}}
title="Logout"
/>
      </View>
    );
  }
}

export default SettingsScreen;
