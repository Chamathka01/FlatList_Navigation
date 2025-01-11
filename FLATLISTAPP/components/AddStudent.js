import { useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export default function AddStudent(){
    const [name,setName]=useState();
    return(
        <View>
           <TextInput mode="outlined" label="Name" value={name} onChangeText={setName}/>
            <Button onPress={()=>{
                //Pas params back to home screen
                navigation.popTo('StudentList',{post:postText});
            }}>ADD</Button>
        </View>
    );
}