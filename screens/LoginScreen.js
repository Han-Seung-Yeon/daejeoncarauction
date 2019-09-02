import React, {Component} from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native';
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton'

export default class LoginScreen extends Component {
    render() {
        return(
            <KeyboardAvoidingView
                style = {{
                    flex : 1,
                    flexDirection : 'column',
                    justifyContent : 'center'
                }}
                behavior = 'padding'
            
            >


            <View style = {styles.container}>
                <Text
                    style={{
                        fontSize : 30,
                        color : 'tomato',
                        marginTop : 20,
                        fontWeight : '200'
                    }}
                >  
                    Car Auction
                </Text>
                <IconTextInput 
                    style = {{marginTop : 10}}
                    iconName = 'ios-person'
                    placeholder = '아이디'

                />
                <IconTextInput 
                     style = {{marginTop : 10}}
                     iconName = 'ios-email'
                     placeholder = '이메일'
                />
                <RoundButton 
                    style = {{marginTop:10}}
                    title = {'회원가입 / 로그인'}
                    onPress = { ()=>{
                        Alert.alert('안녕하세요!!')
                        
                    }}
                />
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        alignSelf : 'center',
        flexDirection : 'column',
        padding : 30,
        alignItems : 'center'
    }
})