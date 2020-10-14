/** @format */

import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const CalcButton = ({ bg, title, style, pressedButton, textStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.button, { backgroundColor: bg }, { ...style }]}
      onPress={() => pressedButton(title)}>
      <Text style={[styles.btnText, { ...textStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 2,
  },
  btnText: {
    fontSize: 36,
    color: '#fff',
  },
});
