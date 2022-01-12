import {Component} from 'react'
import { StyleSheet, Button, View, Text, Image, Alert } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      random: Math.floor(Math.random() * 3)-4,
      battled:false
    }
  }
  battle(random, me){
    switch((random+4) - me) {
      case 2: case -1:
        Alert.alert('Result','You Lose');
        break;
      case 0:
        Alert.alert('Result','You Draw');
        break;
      case -2: case 1:
        Alert.alert('Result','You Win');
        break;
    }
    this.setState({
      random:random+4,
      battled: true
    })
  }

  render(){ 
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{fontSize: 20}}>RSP Game</Text>
        </View>
        <View style={styles.opponentContainer}>
          <Image source={this.state.random==0 ? require('./images/0.png') 
                        : this.state.random==1 ? require('./images/1.png')
                        : this.state.random==2 ? require('./images/2.png')
                        : require('./images/3.png')} style={{width: '70%', height: '70%'}}></Image>
        </View>
        <View style={styles.userContainer}>
          <Button title='Rock' 
            onPress={() => this.battle(this.state.random, 0)}
            disabled={this.state.battled}>
          </Button>
          <Button title='Sisscor' 
            onPress={() => this.battle(this.state.random, 1)}
            disabled={this.state.battled}>
          </Button>
          <Button title='Paper' 
            onPress={() => this.battle(this.state.random, 2)}
            disabled={this.state.battled}>
          </Button>
        </View>
        <View style={styles.manageContainer}>
          <Button title='re-Match' 
            onPress={() => this.setState({
              random:Math.floor(Math.random() * 3)-4,
              battled:false
            })}>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 50
  },
  opponentContainer: {
    flex: 3,
    alignItems: 'center',
  },
  userContainer: {
    marginHorizontal: 60,
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  manageContainer: {
    flex: 1,
    marginHorizontal: 80
  }
});
