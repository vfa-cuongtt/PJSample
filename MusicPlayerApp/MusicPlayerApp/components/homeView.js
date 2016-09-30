import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,Image,TextInput,TouchableOpacity,ListView
} from 'react-native';

var DATA = [
  {song:'Mat Den'},
  {song:'Mat Den'},
  {song:'Mat Den'},
  {song:'Mat Den'},
  {song:'Mat Den'},
  {song:'Mat Den'},
  {song:'Mat Den'},
  {song:'Mat Den'},
  {song:'Mat Den'},
  {song:'Mat Den'},
]


export default class HomeView extends Component {

  clickListSong(){
    console.log('Click List Song');
  }

  clickAlbum(){
    console.log('Click Album');
  }

  clickSinger(){
    console.log('Click Singer');
  }

  createRow(property){
    return(
      <View style={styles.listItem}>
        <Image
          style={{width:50,height:50}}
          source={require('../images/pikachu.jpg')}
        />
        <Text style={{paddingLeft:10}} >{property.song}</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2 });
    this.state = {
      dataSource:ds.cloneWithRows(DATA)
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={{marginTop:20,marginLeft:110,}}>
              <Text>MUSIC PLAYER </Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>

            <TextInput
                 style={styles.textInput}
                 onChangeText={(text) => this.setState({text})}
                 value={this.state.text} />

              <Image
                style={{width:50,height:30,marginTop:15}}
                source={require('../images/layout.png')}
              />

          </View>
        </View>

        <View style={styles.bottom}>
          <View style={{ flexDirection:'row', justifyContent:'center'}}>

              <View style={styles.menu}>
                <TouchableOpacity onPress={() => { this.clickListSong() }} >
                  <Text>List Song</Text>
                </TouchableOpacity >
              </View>

              <View style={styles.menu}>
                <TouchableOpacity onPress={() => { this.clickAlbum() }}>
                  <Text>Album</Text>
                </TouchableOpacity >
              </View>

              <View style={styles.menu}>
                <TouchableOpacity onPress={ () =>{ this.clickSinger() }}>
                  <Text>Singer</Text>
                </TouchableOpacity >
              </View>

          </View>

          <View style={{marginTop:10}}>
            <ListView
              dataSource = {this.state.dataSource}
              renderRow ={this.createRow}
            />
          </View>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  top:{
    flex:1/3,
    backgroundColor:'red'

  },
  bottom:{
    flex:2,
    backgroundColor:'green'
  },
  topMenu:{
    flexDirection:'row',
    justifyContent:'center'
  },
  menu:{
    flex:1,borderWidth:1,borderColor:'gray',alignItems:'center', justifyContent:'center' ,height:30
  },
  listItem:{
    padding:10,
    borderBottomWidth:1,
    borderColor:'gray',
    flexDirection:'row'
  },

  text:{
    alignItems: 'center',
    paddingTop:10,
    marginLeft:100,

  },
  textInput:{
    height:30,
    flex:1,
    borderColor:'gray',
    borderWidth:1,
    marginTop:15
  },
  bao:{
    flexDirection:'row'
  }

});
