import { useState, useEffect  } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function DurationExercise({route}) {

    const {exerName, sgWorkOut} = route.params;

    const navigation = useNavigation();
    const [time, setTimer] = useState(0);
    const [status, isActive] = useState("inactive");
    const [label, chgLabel] = useState("Start");

    useEffect(() => {
        var interval; 
        console.log(status);
        if (status === "active") {
            interval = setInterval(() => setTimer(time + 1), 1000) 
        }
        return () => clearInterval(interval); 
      }, [status, time]);

    var min = Math.floor(time / 60); 

    var sec = time % 60; 
      
    const timerToggle = () => {
        if (status === "active") { 
            setTimer(0);
            isActive("inactive");
            chgLabel("Start")
        } else { 
            isActive("active");
            chgLabel("Reset")
        }
    };

    const handleSuggested = () => {
        navigation.navigate('RepetitionScreen', {
            exerName: sgWorkOut,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Duration</Text>
        {sgWorkOut && <Button title= {`Suggested Workout ${sgWorkOut}`} onPress={handleSuggested}/>}
        <Text style={styles.exerciseName}>{exerName}</Text>
        <Text style={styles.timer}>Timer: {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}</Text>
        <Button onPress={timerToggle} title={label}/>
        <Button onPress={() => navigation.navigate('Home')} title= 'Return'/>
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

    timer: {
        fontSize: 30,
    },

    displayHidden: {
        display: 'none',
    }
  });