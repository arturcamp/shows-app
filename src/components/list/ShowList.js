import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import show from "../../api/show";


export const ShowList = () => {
    const [listState,setListState] = useState(null);

    useEffect(()=>{
        show.get("/shows")
        .then(response=>{
            setListState(response.data)
        })
    },[]);
    
    return(
        <>
            <View style={styles.listStyle}>
                <FlatList
                    data={listState}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>
                        <TouchableOpacity onPress={()=>console.info("Cliquei em " + item.id)}                        >
                            <View style={styles.buttonStyles}>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>}
                />
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    buttonStyles:{
        flexDirection:"row",
        justifyContent:"center",
        borderColor: "gray",
        borderTopWidth:1,
        borderBottomWidth: 1,
        height: 30,
        backgroundColor: "#dcdcdc",
        alignItems: "center"
    },
    listStyle:{
        marginTop: 50

    }
})