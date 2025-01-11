import{ FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { students } from "./StudentDb";
export default function StudentList(){
    return(
        <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });