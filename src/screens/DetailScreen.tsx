import {SafeAreaView, ScrollView, Text, View} from "react-native";


export default function DetailScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <Text>Detail</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
