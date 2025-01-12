import{ FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, button } from "react-native-paper";
import { students } from "./StudentDb";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export default function StudentList(){
    const navigation =useNavigation();
    const [mystudents,setStudents]=useState(students);
    const [rerender,setRerender]=useState(false);
    React.useEffect(() => {
        if (route.params?.newStudent) {
           const {newStudent} = route.params;
           setStudents((prev)=>[...prev,{...newStudent}]);
           setRerender(!rerender);
        }
      }, [route.params?.newStudent]);
    return(
        <View style={styles.container}>
            <FlatList
                data={students}
                keyExtractor={item => item.id}
                extraData={[rerender]}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={()=>navigation.navigation("Profile",{student:item})}>
                        <Text style={styles.card}>{item.name}</Text>
                    </TouchableOpacity>

                }
            />
            <Button onPress={navigation.navigation("Add")}>Add New Student</Button>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: '#fff',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        backgroundColor: '#ffffff',
        borderRadius:8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius:4,
        elevation:2,
    },
  });