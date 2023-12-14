import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {AppColor, FontSize} from '../utils/StyleConstants';

type SubCategoryCardProps = {
  title: string | undefined;
  style?: object;
};

const SubCategoryCard = (props: SubCategoryCardProps) => {
  const [checkboxState, setCheckboxState] = useState(false);
  return (
    <View
      style={{
        ...styles.SubCategoryCard,
        ...props.style,
      }}>
      <Text style={styles.title}>
        {props.title ? props.title : 'No name present'}
      </Text>
      <BouncyCheckbox
        isChecked={checkboxState}
        fillColor={AppColor.black}
        onPress={() => setCheckboxState(!checkboxState)}
      />
    </View>
  );
};

export default SubCategoryCard;

const styles = StyleSheet.create({
  SubCategoryCard: {
    height: 90,
    width: '100%',
    padding: 10,
    paddingLeft: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.large,
    color: AppColor.black,
  },
});
