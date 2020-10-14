/** @format */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CalcButton } from './CalcButton';

export const CalcButtons = ({ pressFunc }) => {
  return (
    <View style={styles.buttons}>
      <View style={styles.row}>
        <CalcButton
          bg="#A3A3A3"
          title="AC"
          pressedButton={pressFunc}
          textStyle={{ fontSize: 32 }}
        />
        <CalcButton
          bg="#A3A3A3"
          title="+/-"
          pressedButton={pressFunc}
          textStyle={{ fontSize: 32 }}
        />
        <CalcButton
          bg="#A3A3A3"
          title="%"
          pressedButton={pressFunc}
          textStyle={{ fontSize: 32 }}
        />
        <CalcButton bg="#FF9A09" title="÷" pressedButton={pressFunc} />
      </View>
      <View style={styles.row}>
        <CalcButton
          bg="#333333"
          title="mc"
          pressedButton={pressFunc}
          textStyle={{ fontSize: 30 }}
        />
        <CalcButton
          bg="#333333"
          title="mr"
          pressedButton={pressFunc}
          textStyle={{ fontSize: 30 }}
        />
        <CalcButton
          bg="#333333"
          title="m-"
          pressedButton={pressFunc}
          textStyle={{ fontSize: 30 }}
        />
        <CalcButton
          bg="#FF9A09"
          title="m+"
          pressedButton={pressFunc}
          textStyle={{ fontSize: 30 }}
        />
      </View>
      <View style={styles.row}>
        <CalcButton bg="#333333" title="7" pressedButton={pressFunc} />
        <CalcButton bg="#333333" title="8" pressedButton={pressFunc} />
        <CalcButton bg="#333333" title="9" pressedButton={pressFunc} />
        <CalcButton bg="#FF9A09" title="×" pressedButton={pressFunc} />
      </View>
      <View style={styles.row}>
        <CalcButton bg="#333333" title="4" pressedButton={pressFunc} />
        <CalcButton bg="#333333" title="5" pressedButton={pressFunc} />
        <CalcButton bg="#333333" title="6" pressedButton={pressFunc} />
        <CalcButton bg="#FF9A09" title="-" pressedButton={pressFunc} />
      </View>
      <View style={styles.row}>
        <CalcButton bg="#333333" title="1" pressedButton={pressFunc} />
        <CalcButton bg="#333333" title="2" pressedButton={pressFunc} />
        <CalcButton bg="#333333" title="3" pressedButton={pressFunc} />
        <CalcButton bg="#FF9A09" title="+" pressedButton={pressFunc} />
      </View>
      <View style={styles.row}>
        <CalcButton
          bg="#333333"
          title="0"
          pressedButton={pressFunc}
          style={{ width: 156, alignItems: 'flex-start', paddingLeft: 25 }}
        />
        <CalcButton bg="#333333" title="." pressedButton={pressFunc} />
        <CalcButton bg="#FF9A09" title="=" pressedButton={pressFunc} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
});
