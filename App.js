import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View  , Text} from 'react-native';

import Display from './src/components/Display'
import Buttons from './src/components/Buttons'
import colors from './src/utils/colors';


export default class App extends Component {

  state = {
    display: '',
    result: ''
  }

  handleOperation = operation => {
    if (operation === 'C') {
      this.setState({
        display: '',
        result: ''
      })
    }
    else if(operation === '=') {
      this.setState({
        display: this.state.result,
        result: ''
      })
    }
    else {
      const display = this.state.display + operation
      let result = this.state.result
      try {

        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')

        result = new String(eval(fixedOperation)).toString()

      }catch(e) {}
      this.setState({
        display,
        result
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.createdby}>Created by AZHAR ELHAR MICDA M2 Présentiel</Text>
        <StatusBar barStyle="light-content" />
        <Display state={this.state} />
        <Buttons operation={this.handleOperation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.darker,
  },
  createdby: {
    textAlign: 'center',
    fontWeight: '100',
    color: colors.white,
    fontSize: 14,
    backgroundColor: colors.dark,
  }
});