import React, {Fragment, Component} from 'react';
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Screen2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.route.params.user,
      userPhotos: []
    }
  }

  componentDidMount() {
    this.getUserPhotos()
  }

  getUserPhotos = () => {
    const accessToken = 'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5'
    const url = this.state.user.links.photos
    fetch(url + '/?client_id=' + accessToken)
    .then((response) => response.json())
    .then((data) => {
      const userPhotoUrls = []
      data.map((photo)=>{
        userPhotoUrls.push(photo.urls.regular)
      })
      this.setState({userPhotos: userPhotoUrls})
    })
  }



  render () {
    const styles = StyleSheet.create({
      background: {
        backgroundColor: '#ffffff',
        height: '100%'
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 25,
      },
      profileText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600'
      },
      userInfoContainer: {
        flexDirection: 'row',
        backgroundColor: '#6aa1f8',
        alignItems: 'center',
        padding: 20,
      },
      userPhotosContainer: {

      },
      userPhotos: {
        height: 200,
      }
    })


    return (
      <Fragment>
        <View style={styles.background}>
          <View style={styles.userInfoContainer}>
            <Image source={{uri: this.state.user.profile_image.medium}} style={styles.profileImage}/>
            <Text style={styles.profileText}>{this.state.user.first_name + ' ' + this.state.user.last_name + ',  @' + this.state.user.username}</Text>
          </View>
          <FlatList
            data={this.state.userPhotos}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity key={item.id} style={{flex: 1}} onPress={()=> this.props.navigation.navigate('Screen3',{photo: item})}>
                <View style={{ flex: 1, flexDirection: 'column'}}>
                    <Image style={styles.userPhotos} source={{uri: item}}/>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Fragment>
    )
  }
}


export default Screen2;
