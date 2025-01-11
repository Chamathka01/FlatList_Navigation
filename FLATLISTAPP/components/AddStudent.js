import { useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";
export default function AddStudent(){
    const [name,setName]=useState();
    return(
        <View>
           <TextInput mode="outlined" label="Name" value=""/>
        </View>
    );
}