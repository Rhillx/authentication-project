import React, { Component } from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({lable, value, onChangeText, placeholder, secureTextEntry}) => {

    const {inputStyle, lableStyle, containerStyle} = styles

    return(
        <View style={containerStyle}>
            <Text style={lableStyle}>{lable}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                style={inputStyle}
            />
        </View>
    );
};

const styles ={
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        textDecorationLine: 'none'
    },
    lableStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        flexDirection: 'row',
        height: 40,
        flex: 1,
        alignItems: 'center'
    }
}

export {Input};