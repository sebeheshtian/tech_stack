import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Header } from './src/components/common';

import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';

class App extends Component {
  state = {
    inputValue: ''
  }

  onChangeText = (text) => {
    this.setState({ inputValue: text });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header title="tech_stack" />

          {/*
            TextInput
            */}

          <LibraryList />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
}

export default App;
