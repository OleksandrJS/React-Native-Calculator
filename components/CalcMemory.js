/** @format */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CalcMemory = ({ memory }) => {
  return (
    <View style={styles.memory}>
      {memory !== null && <Text style={styles.text}>M: {memory}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  memory: { marginBottom: 10 },
  text: { color: '#fff', fontSize: 20 },
});
