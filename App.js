import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableNativeFeedback } from 'react-native'


export default class Main extends Component {

  constructor() {
    super()
    this.state={
      ans:0,
      str:''
    }
  }

  setAns(value) {
    //this.setState({ans:value})
    console.log(value)
  }

  render(){
    return(
      <View style={Calc.all}>
          <Text style={[Calc.topBar]}>{this.state.str}</Text>
          <Text style={[Calc.bar]}>{this.state.ans}</Text>
          <View style={[Calc.buttons]}>

            <View style={[Calc.buttonRow]}>
            
            <TouchableOpacity style={[Calc.button]} onPress={
              this.setAns(7)
              }>
            <Text style={[Calc.buttonText]}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('8')}>
            <Text style={[Calc.buttonText]}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('9')}>
            <Text style={[Calc.buttonText]}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('div')}>
            <Text style={[Calc.buttonText]}>÷</Text>
            </TouchableOpacity>
            
            </View>

            <View style={[Calc.buttonRow]}>
            
            <TouchableOpacity style={[Calc.button]} onPress={console.log('4')}>
            <Text style={[Calc.buttonText]}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('5')}>
            <Text style={[Calc.buttonText]}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('6')}>
            <Text style={[Calc.buttonText]}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('×')}>
            <Text style={[Calc.buttonText]}>×</Text>
            </TouchableOpacity>

            </View>

            <View style={[Calc.buttonRow]}>
            
            <TouchableOpacity style={[Calc.button]} onPress={console.log('1')}>
            <Text style={[Calc.buttonText]}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('2')}>
            <Text style={[Calc.buttonText]}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('3')}>
            <Text style={[Calc.buttonText]}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('-')}>
            <Text style={[Calc.buttonText]}>-</Text>
            </TouchableOpacity>

            </View>

            <View style={[Calc.buttonRow]}>
            
            <TouchableOpacity style={[Calc.button]} onPress={console.log('0')}>
            <Text style={[Calc.buttonText]}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.buttonEqual]} onPress={console.log('=')}>
            <Text style={[Calc.buttonText]}>=</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Calc.button]} onPress={console.log('+')}>
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
    fontSize: 200,
    marginBottom: 10,
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
    backgroundColor: 'red',
    margin: 10,
    borderRadius:8
  }
});