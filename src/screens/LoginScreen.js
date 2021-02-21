import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

export default function LoginScreen() {
    const posts = useSelector(state => state.posts.posts)

    return (
        <ScrollView>
            {
                posts.map(item => {
                    return <Text
                        style={{ borderWidth: 1, borderColor: 'red', margin: 10 }}
                        key={item.id}>
                        {item.title}
                    </Text>
                })
            }
        </ScrollView>
    )
}
