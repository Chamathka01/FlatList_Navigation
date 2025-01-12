import { View, Text } from 'react-native';
export default function UpdateStudent({route}){
    return(
        <View>
            <Text>Update Student</Text>
            <Text>Name:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={name}
                onChangeText={setName}
            />
            <Text>Age:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={age}
                onChangeText={setAge}
            />
            <Text>Phone:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={phone}
                onChangeText={setPhone}
            />
            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={email}
                onChangeText={setEmail}
            />
            <Text>Address:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={address}
                onChangeText={setAddress}
            />
        </View>


    );
}