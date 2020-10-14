/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CalcValue = ({ value, style }) => {
  return (
    <View style={styles.value}>
      <Text style={[styles.text, { ...style }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    paddingRight: 7,
  },
  value: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
});
