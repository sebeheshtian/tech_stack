import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import LibraryItem from './LibraryItem';

const LibraryList = (props) => {
  return (
    <View>
      <FlatList
        keyExtractor={_keyExtractor}
        data={props.libraries}
        renderItem={({item}) => <LibraryItem library={item} />}
        />
    </View>
  );
}

_keyExtractor = (item, index) => item.id;

const mapStateToProps = state => {
  // console.log('state: ', state);
  return {
    libraries: state.libraries
  };
}

export default connect(mapStateToProps)(LibraryList);
