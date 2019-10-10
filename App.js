import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableNativeFeedback } from 'react-native'


export default class Main extends Component {

  constructor() {
    super()
    this.state={
      ans:0,
      TopStr:"",
      showAns: false
    }
  }

  setAns(value) {
    this.setState({ans: value})
    //console.log(value)
  }

  setTopBar(value) {
    this.setState({TopStr: this.state.TopStr + value})
    this.getAns(value)
  }

  getAns(value){
    if (this.state.showAns) {
      this.setState({ans: eval(this.state.TopStr + value)})
      console.log(this.state.TopStr + value)
      this.setState({showAns: false})
    }
  }

  render(){
    return(
      <View style={Calc.all}>
          <Text style={[Calc.topBar]}>{this.state.TopStr}</Text>
          <Text style={[Calc.bar]}>{this.state.ans}</Text>
          <View style={[Calc.buttons]}>

            <View style={[Calc.buttonRow]}>
            
            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(7), this.setTopBar("7") }}>
            <Text style={[Calc.buttonText]}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(8), this.setTopBar("8") }}>
            <Text style={[Calc.buttonText]}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(9), this.setTopBar("7") }}>
            <Text style={[Calc.buttonText]}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns('/'), this.setTopBar("/"), this.setState({showAns: true}) }}>
            <Text style={[Calc.buttonText]}>/</Text>
            </TouchableOpacity>
            
            </View>

            <View style={[Calc.buttonRow]}>
            
            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(4), this.setTopBar("4") }}>
            <Text style={[Calc.buttonText]}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(5), this.setTopBar("5") }}>
            <Text style={[Calc.buttonText]}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(6), this.setTopBar("6") }}>
            <Text style={[Calc.buttonText]}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns('×'), this.setTopBar("*"), this.setState({showAns: true}) }}>
            <Text style={[Calc.buttonText]}>x</Text>
            </TouchableOpacity>

            </View>

            <View style={[Calc.buttonRow]}>
            
            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(1), this.setTopBar("1") }}>
            <Text style={[Calc.buttonText]}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(2), this.setTopBar("2") }}>
            <Text style={[Calc.buttonText]}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(3), this.setTopBar("3") }}>
            <Text style={[Calc.buttonText]}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns('-'), this.setTopBar("-"), this.setState({showAns: true}) }}>
            <Text style={[Calc.buttonText]}>-</Text>
            </TouchableOpacity>

            </View>

            <View style={[Calc.buttonRow]}>
            
            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns(7), this.setTopBar("7") }}>
            <Text style={[Calc.buttonText]}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.buttonEqual]} onPress={() => { this.setAns(0), this.setState({TopStr: ""}) }}>
            <Text style={[Calc.buttonText]}>C</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={() => { this.setAns('+'), this.setTopBar("+"), this.setState({showAns: true}) }}>
            <Text style={[Calc.buttonText]}>+</Text>
            </TouchableOpacity>

            </View>
            </View>
      </View>
    )
  }
}

const Calc = StyleSheet.create({
  bar : {
    flex:1.8,
    marginHorizontal: 20,
    backgroundColor: 'white',
    fontSize: 206,
    marginBottom: 10,
    textAlign: 'right'
  },

  topBar: {
    flex:0.4,
    marginHorizontal: 20,
    backgroundColor: 'white',
    marginVertical: 5,
    marginTop: 50,
    fontSize: 50,
    textAlign: 'right',
  },

  buttons : {
      flex:3,
      backgroundColor: 'black',
      marginHorizontal: 10,
      marginBottom: 25,
  },

  all: {
    backgroundColor: 'black',
    flex:1
  },

  button: {
    backgroundColor: 'gray',
    flex:1,
    color : 'red',
    margin: 10,
    borderRadius: 8
  },

  buttonRow: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },

  buttonText: {
    flex:1,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 75
  },

  buttonEqual: {
    flex: 2,
    backgroundColor: 'orange',
    margin: 10,
    borderRadius:8
  }
});