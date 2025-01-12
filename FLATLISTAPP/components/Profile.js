import { Image } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";
export default function Profile({route}){
    const {student} =route.params;
    return(
        <View>
           <Text>Name:{student.name}</Text> 
           <Text>Age:{student.age}</Text> 
           <Text>Phone:{student.phone}</Text>
           <Text>Email:{student.email}</Text>  
           <Text>Address:{student.adddress}</Text>
           <Image source={student.profile_pic}/> 
        </View>
    );
}