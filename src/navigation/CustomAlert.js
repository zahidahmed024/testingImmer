import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
export default class CustomAlert extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            text: "",
            callfunction: () => { }
        }
    }
    show = () => {
        this.setState({ visible: true })
    }
    hide = () => {
        this.setState({ visible: false })
        // alert('asdas')
    }
    confirm = (callfunction) => {
        this.show()
        this.setState(
            {
                callfunction: callfunction
            }
        )
    }

    render() {
        // console.log('visible', this.state.visible)
        if (this.state.visible) {
            return (
                <AwesomeAlert
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
                    onCancelPressed={this.hide}
                    onConfirmPressed={this.state.callfunction}
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
