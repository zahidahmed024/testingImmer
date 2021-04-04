import React from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'

export default function CameraImage(navigation) {
    return (
        <View style={{ flex: 1 }}>
            {/* <ScrollView> */}
            <Image
                style={{ flex: 1, width: '100%' }}
                source={{ uri: navigation.route.params.ImageUri }}
            />
            <TextInput
                style={{
                    marginBottom:10,
                    borderWidth: 1,
                    borderColor: 'red',
                }}
            />
            {/* </ScrollView> */}
        </View>
    )
}
