/** @format */

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CalcButtons } from './components/CalcButtons';
import { CalcMemory } from './components/CalcMemory';
import { CalcValue } from './components/CalcValue';

export default function App() {
  const [value, setValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [memory, setMemory] = useState(null);
  const [valStyle, setValStyle] = useState({ fontSize: 60 });

  useEffect(() => {
    if (value.length > 8 && value.length < 12) {
      setValStyle({ fontSize: 50, marginBottom: 5 });
    } else if (value.length >= 12 && value.length < 15) {
      setValStyle({ fontSize: 40, marginBottom: 10 });
    } else if (value.length >= 15 && value.length < 18) {
      setValStyle({ fontSize: 34, marginBottom: 15 });
    } else if (value.length >= 18 && value.length < 20) {
      setValStyle({ fontSize: 30, marginBottom: 20 });
    } else if (value.length >= 20) {
      setValStyle({ fontSize: 26, marginBottom: 25 });
    } else {
      setValStyle({ fontSize: 60 });
    }
  }, [value]);

  const pressFunc = (title) => {
    console.log('pressed', title);

    const num = parseFloat(value);

    if (title === '.') {
      if (value.includes('.')) {
        return;
      }
      setValue(value + '.');
      return;
    }

    if (title === 'AC') {
      setValue('0');
      setPrevValue(null);
      setOperator(null);
      return;
    }

    if (title === '%') {
      setValue((num / 100).toString());
      setPrevValue(null);
      setOperator(null);
      return;
    }

    if (title === '+/-') {
      setValue(num * -1);
      return;
    }

    if (title === 'mc') {
      setMemory(null);
      return;
    }

    if (title === 'mr') {
      if (memory !== null) {
        setValue(memory.toString());
      }
      return;
    }

    if (title === 'm+') {
      setMemory(memory + parseFloat(value));
      return;
    }

    if (title === 'm-') {
      setMemory(memory - parseFloat(value));
      return;
    }

    if (title === '+') {
      if (operator !== null) {
        if (operator === '+') {
          setPrevValue(prevValue + parseFloat(value));
        }
      } else {
        setPrevValue(parseFloat(value));
      }
      setValue('0');
      setOperator('+');
      return;
    }

    if (title === '-') {
      if (operator !== null) {
        if (operator === '-') {
          setPrevValue(prevValue - parseFloat(value));
        }
      } else {
        setPrevValue(parseFloat(value));
      }
      setValue('0');
      setOperator('-');
      return;
    }

    if (title === '×') {
      if (operator !== null) {
        if (operator === '×') {
          setPrevValue(prevValue * parseFloat(value));
        }
      } else {
        setPrevValue(parseFloat(value));
      }
      setValue('0');
      setOperator('×');
      return;
    }

    if (title === '÷') {
      if (operator !== null) {
        if (operator === '÷') {
          setPrevValue(prevValue / parseFloat(value));
        }
      } else {
        setPrevValue(parseFloat(value));
      }
      setValue('0');
      setOperator('÷');
      return;
    }

    if (title === '=') {
      if (!operator) return;

      if (operator === '+') {
        setValue((prevValue + parseFloat(value)).toString());
      } else if (operator === '-') {
        setValue((prevValue - parseFloat(value)).toString());
      } else if (operator === '×') {
        setValue((prevValue * parseFloat(value)).toString());
      } else if (operator === '÷') {
        setValue((prevValue / parseFloat(value)).toString());
      }
      setPrevValue(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === '.') {
      setValue(value + title);
    } else {
      if (value[value.length - 4] === '+') {
        return;
      } else {
        setValue(parseFloat(value + title).toString());
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <CalcMemory memory={memory} />
      <CalcValue value={value} style={valStyle} />
      <CalcButtons pressFunc={pressFunc} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
});
