import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { CardItem } from './common';

class LibraryItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id)}>
        <View>
          <CardItem>
            <Text style={styles.titleTextStyle}>{this.props.library.title}</Text>
          </CardItem>

          {this.props.expanded
            ?
              <Text>{this.props.library.description}</Text>
            :
            null
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleTextStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
}

const mapStateToProps = (state, ownProps) => {
  // console.log('state: ', state);
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return {
    expanded,
  };
}

export default connect(mapStateToProps, actions)(LibraryItem);
