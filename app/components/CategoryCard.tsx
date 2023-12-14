import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SubCategoryCard from './SubCategoryCard';

import {AppColor, FontSize} from '../utils/StyleConstants';

type CategoryCardProps = {
  title: string;
  image: string;
  subCategories: {_id: string; name?: string}[];
  style?: object;
  cardCount?: number;
};

const CategoryCard = (props: CategoryCardProps) => {
  const [streched, setStreched] = useState(false);
  return (
    <View>
      <View
        style={{
          ...styles.categoryCard,
          ...props.style,
          backgroundColor: streched ? AppColor.ultraLightGrey : AppColor.white,
        }}>
        <View style={styles.IITContainer}>
          <TouchableOpacity onPress={() => console.log('Menu logo pressed!')}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={32}
              color={AppColor.grey}
              style={styles.firstIcon}
            />
          </TouchableOpacity>
          <Image style={styles.image} source={{uri: props.image}} />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        {props.subCategories.length !== 0 && (
          <TouchableOpacity onPress={() => setStreched(!streched)}>
            {!streched ? (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={36}
                color={AppColor.grey}
              />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-up"
                size={36}
                color={AppColor.grey}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {streched && (
        <View style={styles.subCategoryView}>
          <FlatList
            data={props.subCategories}
            renderItem={({item}) => <SubCategoryCard title={item.name} />}
            ItemSeparatorComponent={() => (
              <View style={styles.subCatSeparator}></View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    height: 96,
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },
  IITContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  firstIcon: {
    marginRight: 6,
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 14,
    alignSelf: 'center',
  },
  title: {
    fontSize: FontSize.large,
    color: AppColor.black,
  },
  subCategoryView: {
    borderWidth: 1,
    borderColor: AppColor.lightGrey,
  },
  subCatSeparator: {
    alignSelf: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: AppColor.lightGrey,
  },
});
