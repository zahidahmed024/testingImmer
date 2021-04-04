import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, Button, TextInput } from 'react-native'
import axios from 'axios';
import { get, post } from '../api/apicaller'
import { fetchPosts, addPost, update, deletePost } from '../store/postStore'
import { useSelector, useDispatch } from 'react-redux'
import CustomAlert from '../navigation/CustomAlert';

export default function LandingScreen({ navigation }) {
    // const postStore = useStoreState((state) => console.log(state));
    // console.log(postStore)
    // const [posts, setPosts] = useState([]);

    const [addText, setText] = useState('');
    const [editText, setEditText] = useState('');
    const [item, setItem] = useState(null);
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    // useEffect(() => {
    //     console.log('rendered')
    //     const getPosts = async () => {
    //         return await dispatch(fetchPosts())
    //     }
    //     getPosts()
    // }, [dispatch])
    const getPosts = async () => {
        return dispatch(fetchPosts())
    }

    return (
        // console.log('rendered')
        <ScrollView>

            <Button
                title="alert show"
                onPress={() => {
                    // new CustomAlert()
                    //  console.log( CustomAlert.show())
                    CustomAlert.show('I have a message for you! asdasd asd asd as das dasd asd asd asd asd asd asd asd asd asd ', () => alert('hoise'), () => CustomAlert.hide())
                }}
            />
            <Button
                title="CameraTest"
                onPress={() => navigation.navigate('CameraTest')}
            />
            <Button
                title="fetch posts"
                onPress={getPosts}
            />

            <Button
                title="LoginScreen"
                onPress={() => navigation.navigate('LoginScreen')}
            />

            <Button
                title="SetState"
                onPress={() => navigation.navigate('SetState')}
            />
            <Text>{addText}</Text>
            <TextInput
                value={addText}
                style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}
                placeholder={'input title'}
                onChangeText={(text) => setText(text)}
            />
            {/* <Button
                title="add todo"
                onPress={fetchPosts}
            /> */}
            <Button
                title="add post"
                color="green"
                onPress={() => {
                    dispatch(addPost(
                        {
                            title: addText,
                            body: 'ahmed 024',
                            userId: Math.random(),
                        }
                    ))
                    setText('')
                }
                }
            />

            {item !== null &&
                <>
                    <TextInput
                        value={editText}
                        style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}
                        placeholder={'input title'}
                        onChangeText={(text) => {
                            setEditText(text)
                        }
                        }
                    />
                    <Button
                        title="update post"
                        color="black"
                        onPress={() => {
                            // alert('halllo')
                            dispatch(update(
                                { ...item, title: editText }
                            ))
                            setItem(null)
                        }}
                    />
                </>

            }

            {
                posts.map((item, index) => {
                    return <View key={item.id} style={{ flexDirection: 'row', margin: 5 }}>
                        <Text
                            style={{ width: '60%', borderWidth: 1, borderColor: 'red', margin: 10 }}
                        >
                            {item.title}
                        </Text>
                        <Button
                            title={'edit'}
                            color="blue"
                            onPress={() => {
                                // alert('hallo')
                                setItem(item)
                                setEditText(item.title)
                            }
                            }
                        />
                        <Button
                            title={'delete'}
                            color="red"
                            onPress={() => {
                                dispatch(
                                    deletePost(item)
                                )
                            }}
                        />
                    </View>
                })
            }

        </ScrollView>
    )
}
