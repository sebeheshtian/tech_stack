import React from 'react';
import { View, Text } from 'react-native';

import { CardItem } from './common';

const LibraryItem = (props) => {
  return (
    <View>
      <CardItem>
        <Text style={styles.titleTextStyle}>{props.library.title}</Text>
      </CardItem>
    </View>
  );
}

const styles = {
  titleTextStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
}

export default LibraryItem;
