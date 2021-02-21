import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, Button, TextInput } from 'react-native'
import axios from 'axios';
import { get, post } from '../api/apicaller'
import { fetchPosts, addPost } from '../store/postStore'
import { useSelector, useDispatch } from 'react-redux'

export default function LandingScreen({ navigation }) {
    // const postStore = useStoreState((state) => console.log(state));
    // console.log(postStore)
    // const [posts, setPosts] = useState([]);

    const [addText, setText] = useState('');
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        console.log('rendered')
        const getPosts = async () => {
            return await dispatch(fetchPosts())
        }
        getPosts()
    }, [dispatch])
  

    return (
        // console.log('rendered')
        <ScrollView>

            <Button
                title="next page"
                onPress={() => navigation.navigate('LoginScreen')}
            />
            <Text>{addText}</Text>
            <TextInput
                style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}
                placeholder={'input title'}
                onChangeText={(text) => setText(text)}
            />
            {/* <Button
                title="add todo"
                onPress={fetchPosts}
            /> */}
            <Button
                title="add todo"
                onPress={() => dispatch(addPost(
                    {
                        title: addText,
                        body: 'ahmed 024',
                        userId: Math.random(),
                    }
                ))}
            />

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
