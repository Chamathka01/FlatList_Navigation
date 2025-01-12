import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AddStudent(){
    const navigation = useNavigation();
    const [name,setName]=useState();
    const newStudent={
        name:name,
        id:"451a",
        age:15

}
    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
           <TextInput mode="outlined" label="Name" value={name} onChangeText={setName} style={styles.input}/>
        </View>
        <View style={styles.buttonContainer}>    
            <Button onPress={()=>{
                //Pass params back to home screen
                navigation.popTo('StudentList',{newStudent:postText});
            }}>ADD</Button>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: 20,
    },
    formContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#fff",
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
    },
    addButton: {
        width: "50%",
        paddingVertical: 10,
        backgroundColor: "#007bff",
    },
});