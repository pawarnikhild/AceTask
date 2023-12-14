import React, {useState} from 'react';

import AddCategoriesScreenView from '../views/AddCategoriesScreenView';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker';

import {addCategory} from '../services/FoodCatServices';
import {Alert} from 'react-native';

const AddCategoriesScreen = () => {
  const [categoryName, setCategoryName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [subCatInputCount, setSubCatInputCount] = useState(1);
  const [subCatInputValues, setSubCatInputValues] = useState<string[]>(['']);

  const handleAddInput = () => {
    setSubCatInputCount(subCatInputCount + 1);
    setSubCatInputValues([...subCatInputValues, '']);
  };

  const handleRemoveInput = (index: number) => {
    if (subCatInputCount > 1) {
      setSubCatInputCount(subCatInputCount - 1);
      setSubCatInputValues(subCatInputValues.filter((item, i) => i !== index));
    }
  };

  const handleInputChange = (text: string, index: number) => {
    const newInputValues = [...subCatInputValues];
    newInputValues[index] = text;
    setSubCatInputValues(newInputValues);
  };

  const successAlert = () => {
    Alert.alert('Alert', 'Category added succesfully!', [
      {
        text: 'OK',
        onPress: () => {
          setCategoryName('');
          setSubCatInputCount(1);
          setSubCatInputValues(['']);
        },
      },
    ]);
  };
  const failureAlert = () => {
    Alert.alert('Alert', 'Failed to add category. Please try again.');
  };

  const emptyAlert = () => {
    Alert.alert('Alert', 'Please enter a category name');
  };

  const handleAddPress = async () => {
    if (categoryName.trim() !== '') {
      const mappedData = {
        category_name: categoryName,
        sub_cateries: subCatInputValues.map((value, index) => ({
          name: `${value}`,
        })),
        image: selectedImage,
      };
      const result = await addCategory(mappedData);
      if (result) {
        successAlert();
      } else {
        failureAlert();
      }
    } else {
      emptyAlert();
    }
  };
  const imagePicker = () => {
    // const options = {
    //   mediaType: 'photo',
    //   includeBase64: false,
    //   maxHeight: 2000,
    //   maxWidth: 2000,
    // };
    // launchImageLibrary(options, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('Image picker error: ', response.error);
    //   } else {
    //     let imageUri = response.uri || response.assets?.[0]?.uri;
    //     // setSelectedImage(imageUri);
    //   }
    // });
  };

  return (
    <AddCategoriesScreenView
      categoryName={categoryName}
      selectedImage={selectedImage}
      subCatInputCount={subCatInputCount}
      subCatInputValues={subCatInputValues}
      setCategoryName={setCategoryName}
      setSelectedImage={setSelectedImage}
      imagePicker={imagePicker}
      setSubCatInputCount={setSubCatInputCount}
      setSubCatInputValues={setSubCatInputValues}
      handleAddInput={handleAddInput}
      handleRemoveInput={handleRemoveInput}
      handleInputChange={handleInputChange}
      handleAddPress={handleAddPress}
    />
  );
};

export default AddCategoriesScreen;
