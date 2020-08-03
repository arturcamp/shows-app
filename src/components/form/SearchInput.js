import React from "react";
import {StyleSheet,View} from "react-native";
import { Feather } from '@expo/vector-icons';
import GenericInput from "./GenericInput";

const SearchInput = (props) => {
    
    const onChange = (text) =>{
        if(props.onChange)
        props.onChange(text);
    }

    return(
        <>
          <View style={styles.viewStyle}>
             <Feather style={styles.iconStyle} name="search" size={24} color="black" />
             <GenericInput initialValue={props.initialValue} style={styles.inputStyle} onChangeText={onChange}/>
          </View>
        </>
    )

}

export default SearchInput;

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: "#e6e3d8",
        flexDirection:"row"  ,
        borderRadius: 50,
        height: 40,
        marginLeft: 8,
        marginRight: 8
    },
    inputStyle:{
       marginLeft: 5
    },
    iconStyle:{
        alignSelf: "center",
        marginLeft: 8
    }
})