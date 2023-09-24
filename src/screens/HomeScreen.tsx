import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import TitleValue from "../components/TitleValue";
import {withTheme, Text} from '@rneui/themed';


export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View style={styles.contentView}>
                <TitleValue/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contentView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
    },
});
