import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button } from 'react-native';

export default function RepetitionExercise({route}) {

    const navigation = useNavigation();

    const {exerName, sgWorkOut} = route.params;

    const [reps, repCounter] = useState(0);

    const handleSuggested = () => {
        navigation.navigate('DurationScreen', {
            exerName: sgWorkOut,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Repetition</Text>
            {sgWorkOut && <Button title= {`Suggested Workout ${sgWorkOut}`} onPress={handleSuggested}/>}
            <Text style={styles.exerciseName}>{exerName}</Text>
            <Text style={styles.reps}>Rep Count: {reps}</Text>
            <View>
                <Button style={styles.buttonSpace} onPress={() => repCounter(reps + 1)} title='Complete Rep'/>
                <Button style={styles.buttonSpace} onPress={() => repCounter(0)} title= 'Reset'/>
                <Button style={styles.buttonSpace} onPress={() => navigation.navigate('Home')} title= 'Return'/>   
            </View>
        </SafeAreaView>
) 
}

const styles = StyleSheet.create({
    container: {
      margin: 50,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    title: {
      margin: 60,
      fontSize: 50,
      fontWeight: 'bold'
    },
  
    controlElem: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 200,
    },

    exerciseName: {
        fontSize: 25,
    },

    reps: {
        fontSize: 30,
    },

    buttonSpace: {
        flexDirection: 'column',
        flex: 1,
        marginVertical: 5,
    }
    ,

    displayHidden: {
        display: 'none',
    }

  });