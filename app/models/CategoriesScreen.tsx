import React, {useState, useEffect} from 'react';

import {fetchCategoryData} from '../services/FoodCatServices';

import CategoriesScreenView from '../views/CategoriesScreenView';

const CategoriesScreen = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    handleCategoriesData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    handleCategoriesData();
    setRefreshing(false);
  };

  const handleCategoriesData = async () => {
    try {
      const result = await fetchCategoryData();
      setCategoriesData(result.result);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  return (
    <CategoriesScreenView
      categoriesData={categoriesData}
      refreshing={refreshing}
      handleRefresh={handleRefresh}
    />
  );
};

export default CategoriesScreen;
