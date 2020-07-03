import React, {Fragment, Component} from 'react';
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Screen1 from './Components/Screen1.js'
import Screen2 from './Components/Screen2.js'
import Screen3 from './Components/Screen3.js'

const Stack = createStackNavigator()


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }



  render () {
    const options1 = {
      headerStyle: {
        backgroundColor: '#6aa1f8',
        shadowColor: 'transparent',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
    }

    const options2 = {
      headerStyle: {
        backgroundColor: '#000000',
        shadowColor: 'transparent',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
      headerTitle: ''
    }

    return (
      <Fragment>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} options={options1}/>
            <Stack.Screen name="Screen2" component={Screen2} options={options1}/>
            <Stack.Screen name="Screen3" component={Screen3} options={options2}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Fragment>
    )
  }
}


export default App;
