import React from "react";
import {StyleSheet,Text, View} from "react-native";
import GenericInput from "./GenericInput";

const Input = (props) => {
    
    const onChange = (text) =>{
        if(props.on)
        props.onChange(text);
    }

    return(
        <>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{props.label}</Text>
          <GenericInput initialValue={props.initialValue} style={styles.textInputStyle}onChangeText={onChange}/>
        </View>
        </>
    )

}

export default Input;

const styles = StyleSheet.create({
    textInputStyle:{
              
        
    },
    viewStyle:{
        backgroundColor: "#ded9c5",
        flexDirection:"row",
        borderRadius: 50,
        height: 40,
        marginLeft: 8,
        marginRight: 8
    },
    textStyle:{
        alignSelf: "center",
        marginLeft: 8

    }
})