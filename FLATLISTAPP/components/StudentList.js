import{ FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { students } from "./StudentDb";
export default function StudentList(){
    return(
        <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={item=>item.id}
        renderItem={({item}) => 
            <TouchableOpacity>
                 <Text style={styles.card}>{item.name}</Text>
            </TouchableOpacity>
       
    }
      />
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