import { useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
export default function AddStudent(){
    const [name,setName]=useState();
    const navigation = useNavigation();
    const newStudent={
        name:name,
        id:"451a",
        age:15

}
    return(
        <View>
           <TextInput mode="outlined" label="Name" value={name} onChangeText={setName}/>
            <Button onPress={()=>{
                //Pas params back to home screen
                navigation.popTo('StudentList',{newStudent:postText});
            }}>ADD</Button>
        </View>
    );
}