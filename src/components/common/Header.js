import React, {Component} from 'react';
import {View, Text} from 'react-native';

const Header = (props) =>{

    const {headerText, headerContainer} = styles;

    return(
        <View style={headerContainer} >
            <Text style={headerText}>{props.headerTitle}</Text>
        </View>    
    )
}


const styles = {
    headerContainer:{
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 3,
        position: 'relative',

    },
    headerText:{
        fontSize: 30,

    },
}




export { Header };