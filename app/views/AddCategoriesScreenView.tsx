import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import InputText from '../components/InputText';
import DynamicInputText from '../components/DynamicInputText';
import CustomButton from '../components/CustomButton';

import GlobleStyles from '../styles/GlobleStyles';
import {AppColor} from '../utils/StyleConstants';
import AddCategoriesScreenStyle from '../styles/AddCategoriesScreenStyle';

type AddCategoriesScreenViewProps = {
  categoryName: string;
  selectedImage: string;
  subCatInputCount: number;
  subCatInputValues: string[];
  setCategoryName: (active: string) => void;
  setSelectedImage: (active: string) => void;
  imagePicker: () => void;
  setSubCatInputCount: (active: number) => void;
  setSubCatInputValues: (active: string[]) => void;
  handleAddInput: () => void;
  handleRemoveInput: (active: number) => void;
  handleInputChange: (text: string, index: number) => void;
  handleAddPress: () => void;
};
const AddCategoriesScreenView = (props: AddCategoriesScreenViewProps) => {
  return (
    <View style={GlobleStyles.appContainer}>
      <ScrollView>
        <Text style={GlobleStyles.pageHeading}>
          Add Categories & Subcategories
        </Text>
        <View style={{padding: 20}}>
          <Text style={AddCategoriesScreenStyle.inputHeading}>
            Category name
          </Text>
          <InputText
            value={props.categoryName}
            onChangeText={(text: string) => {
              props.setCategoryName(text);
            }}
            style={AddCategoriesScreenStyle.inputText}
          />
          <Text style={AddCategoriesScreenStyle.inputHeading}>
            Category image
          </Text>
          <View style={AddCategoriesScreenStyle.imageAndButtonContainer}>
            <View style={AddCategoriesScreenStyle.imagecontainer}>
              <FontAwesome name="image" size={36} color={AppColor.grey} />
            </View>
            <CustomButton
              title="Choose file"
              style={AddCategoriesScreenStyle.chooseButton}
              onPress={props.imagePicker}
            />
          </View>
          <Text style={AddCategoriesScreenStyle.inputHeading}>
            Create sub-categories
          </Text>
          <DynamicInputText
            subCatInputCount={props.subCatInputCount}
            subCatInputValues={props.subCatInputValues}
            setSubCatInputCount={props.setSubCatInputCount}
            setSubCatInputValues={props.setSubCatInputValues}
            handleAddInput={props.handleAddInput}
            handleRemoveInput={props.handleRemoveInput}
            handleInputChange={props.handleInputChange}
          />
        </View>
      </ScrollView>
      <CustomButton title="Add" onPress={props.handleAddPress} />
    </View>
  );
};

export default AddCategoriesScreenView;
