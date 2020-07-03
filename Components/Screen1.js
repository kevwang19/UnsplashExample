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

class Screen1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      userQuery: undefined,
      results: []
    }
  }

  componentDidMount() {

  }

  searchUser = () => {
    if (this.state.userQuery !== undefined) {
      const accessToken = 'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5'
      fetch('https://api.unsplash.com/search/users?client_id=' + accessToken + '&page=1&query=' + this.state.userQuery)
      .then((response) => response.json())
      .then((data) => {
        this.setState({results: data.results})
      })
    } else {
      Alert.alert('Enter a search term!')
    }
  }


  render () {
    const styles = StyleSheet.create({
      background: {
        backgroundColor: '#6aa1f8',
        height: '100%',
      },
      searchContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        width: 330,
        marginBottom: 25,
        marginTop: 40,
        alignSelf: 'center'
      },
      searchText: {
        fontSize: 17,
      },
      searchButton: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 18,
        width: 100,
        alignSelf: 'center',
        marginBottom: 30
      },
      searchButtonText: {
        color: '#6aa1f8',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
      },
      userBox: {
        backgroundColor: '#ffffff',
        width: 300,
        borderRadius: 15,
        padding: 15,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 20,
      }
    })

    const results = this.state.results.map((user, i)=>{
      if (user) {
        return (
          <TouchableOpacity key={i} style={styles.userBox} onPress={()=> this.props.navigation.navigate('Screen2',{user: user})}>
              <Image source={{uri: user.profile_image.medium}} style={styles.profileImage}/>
              <Text>{user.first_name + ' ' + user.last_name}</Text>
          </TouchableOpacity>
        )
      }
    })

    return (
      <Fragment>
        <ScrollView style={styles.background}>
          <View style={styles.searchContainer}>
            <TextInput onChangeText={text => this.setState({userQuery: text})} placeholderTextColor='#999999' placeholder='Search a user by keyword' returnKeyType='done' style={styles.searchText}>{this.state.userQuery}</TextInput>
          </View>
          <TouchableOpacity onPress={()=> this.searchUser()} style={styles.searchButton}><Text style={styles.searchButtonText}>Search</Text></TouchableOpacity>
          <View style={{marginBottom: 50}}>{results}</View>
        </ScrollView>
      </Fragment>
    )
  }
}


export default Screen1;
