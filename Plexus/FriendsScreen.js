import React, {Component} from 'react';
import { Text, View, ScrollView, TextInput, Image, FlatList } from 'react-native';
import { createAppContainer, StackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  MessagesScreen from './MessagesScreen';
import  Map from './Map';
import { ListItem, Card, Button } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]

const list = [
  {
    name: 'Jake Johnson',
    avatar_url: 'https://media.licdn.com/dms/image/C4E03AQHY_p6NJe-iOA/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=6GW_wlowuPIXKdJvF8iZR1wG6GG8NZekrE2YJfhqer8',
    subtitle: 'Active now | Zone 1'
  },
  {
    name: 'James McElroy',
    avatar_url: 'https://images.squarespace-cdn.com/content/v1/5cf6deff4056c000011e1e34/1559693740288-XG573ZN9XIU07WZ5GTWW/ke17ZwdGBToddI8pDm48kBV5VTwe0J11OBCu4CJDeiRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHxBSGhSQkAIn49VFo2BJVZ2h1Pfmkmg6Dmc4y2UO6RQKQvevUbj177dmcMs1F0H-0/Screen+Shot+2019-06-04+at+7.14.26+PM.png?format=750w',
    subtitle: 'Last seen 2 min ago | Zone 2'
  },
  {
    name: 'Bobby Thakkar',
    avatar_url: 'https://media.licdn.com/dms/image/C4E03AQE_g_eun75NfA/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=_UWEhi4tBEe150KjIaWQflh9ZEd0Xvl6J3F5yT_ox2c',
    subtitle: 'Last seen 3 min ago | Zone 3'
  },
  {
    name: 'Swarn Singh',
    avatar_url: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p320x320/31184658_219149588852666_3551699102070734848_n.jpg?_nc_cat=103&_nc_oc=AQluwU4Gs8N1a4pQTsCZEY9aGjc1Bgi4F-BcWU4eBbRGcXcTGaLU-OCl8faX5WB8oehPTsluztO3ic2NfYs-4Csx&_nc_ht=scontent-dfw5-1.xx&oh=6fc0171accca09be4fdcee22e2be893e&oe=5E12E907',
    subtitle: 'Last seen 5 min ago | Zone 4'
  },
  {
    name: 'Jake Johnson',
    avatar_url: 'https://media.licdn.com/dms/image/C4E03AQHY_p6NJe-iOA/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=6GW_wlowuPIXKdJvF8iZR1wG6GG8NZekrE2YJfhqer8',
    subtitle: 'Active now | Zone 1'
  },
  {
    name: 'James McElroy',
    avatar_url: 'https://images.squarespace-cdn.com/content/v1/5cf6deff4056c000011e1e34/1559693740288-XG573ZN9XIU07WZ5GTWW/ke17ZwdGBToddI8pDm48kBV5VTwe0J11OBCu4CJDeiRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHxBSGhSQkAIn49VFo2BJVZ2h1Pfmkmg6Dmc4y2UO6RQKQvevUbj177dmcMs1F0H-0/Screen+Shot+2019-06-04+at+7.14.26+PM.png?format=750w',
    subtitle: 'Last seen 2 min ago | Zone 2'
  },
  {
    name: 'Bobby Thakkar',
    avatar_url: 'https://media.licdn.com/dms/image/C4E03AQE_g_eun75NfA/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=_UWEhi4tBEe150KjIaWQflh9ZEd0Xvl6J3F5yT_ox2c',
    subtitle: 'Last seen 3 min ago | Zone 3'
  },
  {
    name: 'Swarn Singh',
    avatar_url: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p320x320/31184658_219149588852666_3551699102070734848_n.jpg?_nc_cat=103&_nc_oc=AQluwU4Gs8N1a4pQTsCZEY9aGjc1Bgi4F-BcWU4eBbRGcXcTGaLU-OCl8faX5WB8oehPTsluztO3ic2NfYs-4Csx&_nc_ht=scontent-dfw5-1.xx&oh=6fc0171accca09be4fdcee22e2be893e&oe=5E12E907',
    subtitle: 'Last seen 5 min ago | Zone 4'
  },
  {
    name: 'Jake Johnson',
    avatar_url: 'https://media.licdn.com/dms/image/C4E03AQHY_p6NJe-iOA/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=6GW_wlowuPIXKdJvF8iZR1wG6GG8NZekrE2YJfhqer8',
    subtitle: 'Active now | Zone 1'
  },
  {
    name: 'James McElroy',
    avatar_url: 'https://images.squarespace-cdn.com/content/v1/5cf6deff4056c000011e1e34/1559693740288-XG573ZN9XIU07WZ5GTWW/ke17ZwdGBToddI8pDm48kBV5VTwe0J11OBCu4CJDeiRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHxBSGhSQkAIn49VFo2BJVZ2h1Pfmkmg6Dmc4y2UO6RQKQvevUbj177dmcMs1F0H-0/Screen+Shot+2019-06-04+at+7.14.26+PM.png?format=750w',
    subtitle: 'Last seen 2 min ago | Zone 2'
  },
  {
    name: 'Bobby Thakkar',
    avatar_url: 'https://media.licdn.com/dms/image/C4E03AQE_g_eun75NfA/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=_UWEhi4tBEe150KjIaWQflh9ZEd0Xvl6J3F5yT_ox2c',
    subtitle: 'Last seen 3 min ago | Zone 3'
  },
  {
    name: 'Swarn Singh',
    avatar_url: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p320x320/31184658_219149588852666_3551699102070734848_n.jpg?_nc_cat=103&_nc_oc=AQluwU4Gs8N1a4pQTsCZEY9aGjc1Bgi4F-BcWU4eBbRGcXcTGaLU-OCl8faX5WB8oehPTsluztO3ic2NfYs-4Csx&_nc_ht=scontent-dfw5-1.xx&oh=6fc0171accca09be4fdcee22e2be893e&oe=5E12E907',
    subtitle: 'Last seen 5 min ago | Zone 4'
  },
]

class FriendsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, paddingTop: 50, justifyContent: 'top', paddingLeft: 10, paddingRight: 10}}>
      <Text style={{fontSize: 30, fontWeight: '800', color: 'blue'}}>PLEXUS</Text>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            onPress={() => this.props.navigation.navigate('MessagesScreen')}
          />
        ))
      }
      <View style={{ flex: 1, paddingTop: 50, justifyContent: 'top', alignItems: 'center'}}>

      <Text style={{fontSize: 20, fontWeight: '200', color: 'orange'}}>Add a Friend</Text>
        <TextInput
        style={{ padding: 20,}}
          placeholder="What's your friend's name?"
          onChangeText={(first) => this.setState({first})}
          value={this.state.first}
        />
        <Button
        buttonStyle={{borderRadius: 10}}
        borderRadius='20'
        title="Add friend"
        />
        </View>
      </ScrollView>
    );
  }
}
export default FriendsScreen;
