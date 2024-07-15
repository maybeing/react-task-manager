import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

const ColorBlock = ({ color }) => {
  return <View style={[styles.block, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  block: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
});

ColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorBlock;
