import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import InputText from './InputText';
import {AppColor} from '../utils/StyleConstants';

type DynamicInputTextProps = {
  subCatInputCount: number;
  subCatInputValues: string[];
  setSubCatInputCount: (active: number) => void;
  setSubCatInputValues: (active: string[]) => void;
  handleAddInput: () => void;
  handleRemoveInput: (active: number) => void;
  handleInputChange: (text: string, index: number) => void;
};

const DynamicInputText = (props: DynamicInputTextProps) => {
  return (
    <View>
      {props.subCatInputValues.map((value, index) => (
        <View key={index} style={styles.dynamicInputText}>
          <InputText
            value={value}
            onChangeText={(text: string) =>
              props.handleInputChange(text, index)
            }
            style={styles.inputText}
          />
          {index === 0 && (
            <TouchableOpacity
              onPress={props.handleAddInput}
              style={{padding: 8}}>
              <View
                style={{
                  ...styles.plusMinusContainer,
                  backgroundColor: AppColor.lightBlue,
                }}>
                <Text style={styles.plusMinusText}>+</Text>
              </View>
            </TouchableOpacity>
          )}
          {index > 0 && (
            <TouchableOpacity
              onPress={() => props.handleRemoveInput(index)}
              style={{padding: 8}}>
              <View
                style={{
                  ...styles.plusMinusContainer,
                  backgroundColor: AppColor.lightGrey,
                }}>
                <Text style={styles.plusMinusText}>-</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

export default DynamicInputText;

const styles = StyleSheet.create({
  dynamicInputText: {flexDirection: 'row', alignItems: 'center'},
  inputText: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
  plusMinusContainer: {
    height: 44,
    width: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusMinusText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: AppColor.white,
  },
});
