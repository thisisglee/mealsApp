import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FilterScreen = (props) => {
    return (
        <View styles={styles.screen}>
            <Text>The Meal Detail Screen</Text>
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})