import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';

export default class Login extends Component {


  authentication = async () => {
    this.setState({ loading: true })
    const { username, password } = this.state;
    let errorFlag = false;
    // input validation
    if (username) {
      errorFlag = true;
      this.setState({ usernameMessage: false });
    } else {
      errorFlag = false;
      this.setState({ usernameMessage: true })
    }
    if (password) {
      errorFlag = true;
      this.setState({ passwordMessage: false });
    } else {
      errorFlag = false;
      this.setState({ passwordMessage: true })
    }
    if (errorFlag) {
      console.log("errorFlag");

      /** Call Your API */
    } else {
      this.setState({ loading: false });
    }
  }
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 2 }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <ScrollView contentContainerStyle={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.loginform}>
                <Text style={{ color: 'black' }}>
                  Login Form
                </Text>
              </View>
              <View style={styles.inputLayout}>
                <TextInput
                  placeholder='Email'
                  value={this.state.Email}
                  onChangeText={Email => this.setState({ Email })}
                />
                {
                  this.state.usernameMessage && <Text style={styles.textDanger}>                              {"Email is required"}</Text>
                }
              </View>
              <View style={styles.inputLayout}>
                <TextInput
                  placeholder='Name'
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
                />
                {
                  this.state.usernameMessage && <Text style={styles.textDanger}>{"username is required"}</Text>
                }
              </View>
              <View style={styles.inputLayout}>
                <TextInput
                  placeholder='Phone Number'
                  value={this.state.phonenumber}
                  onChangeText={phonenumber => this.setState({ phonenumber })}
                />
                {
                  this.state.usernameMessage && <Text style={styles.textDanger}>{"phone number is required"}</Text>
                }
              </View>
              <View style={styles.openButton}>
                <Button mode="contained" onPress={() => this.authentication()} title="Check">

                </Button>

              </View>
              <View style={styles.openButton} >
                <Button mode="contained" onPress={() => { this.setModalVisible(!this.state.modalVisible); }} title="cancel">

                </Button>
              </View>
            </View>
          </ScrollView>

        </Modal>

        <Button
          onPress={() => {
            this.setModalVisible(true);
          }} title="Pay Here">

        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {

    backgroundColor: "white",
    borderRadius: 20,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    padding: 10,
    elevation: 2
  },
  inputLayout: {
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  textDanger: {
    color: "#dc3545",
    marginTop: 10,
  },
  loginform: {
    alignItems: "center",
    padding: 10
  },
});