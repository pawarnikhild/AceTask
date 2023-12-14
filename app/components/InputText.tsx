import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {AppColor, FontSize} from '../utils/StyleConstants';

type InputTextProps = {
  onChangeText: (active: string) => void;
  value: string;
};
const InputText = (props: any) => {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      style={{...styles.textInput, ...props.style}}
      value={props.value}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  textInput: {
    padding: 8,
    borderColor: AppColor.grey,
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: FontSize.large,
    color: AppColor.black,
  },
});
