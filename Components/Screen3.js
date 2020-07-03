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

class Screen3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      photo: this.props.route.params.photo
    }
  }

  componentDidMount() {

  }



  render () {
    const styles = StyleSheet.create({
      background: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        height: '100%'
      },
      photo: {
        width: '100%',
        height: '50%',
        marginTop: -50,
      }

    })


    return (
      <Fragment>
        <View style={styles.background}>
          <Image source={{uri: this.state.photo}} style={styles.photo}/>
        </View>
      </Fragment>
    )
  }
}


export default Screen3;
