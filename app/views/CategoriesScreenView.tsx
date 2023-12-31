import React from 'react';
import {View, Text, FlatList, SafeAreaView, RefreshControl} from 'react-native';

import CategoryCard from '../components/CategoryCard';

import GlobleStyles from '../styles/GlobleStyles';
import CategoriesScreenStyle from '../styles/CategoriesScreenStyle';

type CategoriesScreenViewProps = {
  categoriesData: {
    _id: string;
    category_name: string;
    image: string;
    sub_cateries: {
      _id: string;
      name: string;
    }[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
  refreshing: boolean;
  handleRefresh: () => void;
};

const CategoriesScreenView = (props: CategoriesScreenViewProps) => {
  return (
    <SafeAreaView style={{...GlobleStyles.appContainer, paddingBottom: 90}}>
      <Text style={GlobleStyles.pageHeading}>Categories & Subcategories</Text>
      {props.categoriesData.length ? (
        <View style={CategoriesScreenStyle.categoryView}>
          <FlatList
            data={props.categoriesData}
            renderItem={({item}) => (
              <CategoryCard
                image={
                  'data:image/jpeg;base64,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'
                }
                title={item.category_name}
                subCategories={item.sub_cateries}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={CategoriesScreenStyle.catSeparator}></View>
            )}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={props.refreshing}
                onRefresh={props.handleRefresh}
              />
            }
          />
        </View>
      ) : (
          <Text style={CategoriesScreenStyle.heading}>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default CategoriesScreenView;
