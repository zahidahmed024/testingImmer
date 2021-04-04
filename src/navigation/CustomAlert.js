import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
export default class CustomAlert extends Component {
    static myComponentInstance
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            text: "",
            onPressOk: () => { },
            onPressCancel: () => { },
        }
        CustomAlert.myComponentInstance = this

    }
    componentWillMount() {
        console.log('mount',)
        this._hide()
    }

    static show(text, onPressOk, onPressCancel) {
        console.log('pressed')
        setTimeout(() => {
            CustomAlert.myComponentInstance._show(text, onPressOk, onPressCancel)
        }, 100);
    }
    static hide() {
        setTimeout(() => {
            CustomAlert.myComponentInstance._hide()
        }, 100);
    }
    _hide = () => {
        this.setState({
            visible: false,
        })
    }

    _show = (text, onPressOk, onPressCancel) => {
        console.log('show')
        // setTimeout(
        this.setState({
            visible: true,
            onPressOk: onPressOk,
            onPressCancel: onPressCancel,
            text
        })
        CustomAlert.render()
        // , 100)
    }

    componentWillUnmount() {
        console.log('hide')

        setTimeout(() => {
            this._hide()
        }, 100);
    }
    render() {
        // console.log('visible', this.state.visible)
        if (this.state.visible) {
            return (
                < AwesomeAlert
                    show={this.state.visible}
                    showProgress={false}
                    title="AwesomeAlert"
                    message={this.state.text}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={this.state.onPressOk}
                    onConfirmPressed={this.state.onPressCancel || this._hide}
                    contentContainerStyle={{ backgroundColor: '#ffff34', }
                    }
                    titleStyle={{ color: 'black' }}
                />)
        } else {
            return null
        }




    }
}

// export default function CustomAlert() {
//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }
