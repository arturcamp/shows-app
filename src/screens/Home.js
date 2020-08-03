import React,{useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import Input from "../components/form/Input";
import SearchInput from "../components/form/SearchInput";

const HomeScreen = () => {
    const [stateNome, setStateNome] = useState("");
    const [statePesquisa, setStatePesquisa] = useState("");
    return (
        <>
            <View  style={styles.parentStyle}>
                <View style={styles.viewStyle}>
                    <SearchInput onChange={(text)=>setStatePesquisa(text)} initialValue={""} />
                </View>
                <View style={styles.viewStyle}>
                    <Input label="Nome" onChange={(text)=>setStateNome(text)} initialValue={""} />
                </View>
            </View>
      </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    parentStyle:{
        flex: 1,
        marginTop: 25

    },    
    viewStyle:{
       flex: 1,
       alignItems: "stretch",
       justifyContent: "flex-start", 
       marginTop: 8
    }
})