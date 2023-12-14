import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstants';

type CustomButtonProps = {
  title: string;
  style?: object;
  onPress: () => void;
};
const CustomButton = (props: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={{...styles.customButton, ...props.style}}
      onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    padding: 10,
    backgroundColor: AppColor.lightBlue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: AppColor.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});
