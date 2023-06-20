import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const[value, setvalue] = useState("");
  const[ListOfNotes, setListOfNotes] = useState([])

  function getinput(gettext) {
    setvalue(gettext);
  }

  function setinput() {
    setListOfNotes(currentNotes=> [...currentNotes,value])
  }

  console.log(ListOfNotes)

  return (
    <View style={styles.container}>
      
      <Text style={{
        fontSize : 30,
        textAlign : 'center',
        padding : 50,
        color : '#3498DB'
      }}>Hello Mithun</Text>

      <TextInput onChangeText={getinput} style={{
        fontSize : 20,
        padding : 20
      }}placeholder='Type Here'/>

      <Button onPress={setinput} color={'#17202A'} title='Submit'/>

      <View style={styles.container}>
        <ScrollView>
        {
           ListOfNotes.map((item,index)=> (
            <Text style={styles.display} key={'item$(index)'}>{item}</Text>
           ))
        }
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin : 20,
    flex : 1,
  },
  display: {
    margin : 10,
    padding : 10,
    textAlign : 'center',
    backgroundColor : '#85C1E9'
  }
});
