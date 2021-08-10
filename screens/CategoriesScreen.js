import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesScreen = (props) => {
  // console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
          // props.navigation.push('CategoryMeals');
        }}
      />
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.replace('MealDetail');
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
