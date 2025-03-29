import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button } from 'react-native';

export default function Home() {

    const navigation = useNavigation();

    const exerciseArray = [
        {key: 0, exercise: 'Push Ups' , type: "Repetition", sgWorkOut: 'Running'},
        {key: 1, exercise: 'Running' , type: "Duration", sgWorkOut: 'Pull Ups'},
        {key: 2, exercise: 'Pull Ups' , type: "Repetition", sgWorkOut: 'Planks'},
        {key: 3, exercise: 'Planks' , type: "Duration", sgWorkOut: 'Push Ups'}
      ];


    const handlePressEvnt = (exercise, type, suggest) => {
        if (type == "Repetition") {
            navigation.navigate('RepetitionScreen', {
                exerName: exercise,
                sgWorkOut: suggest,
            });
        } if (type == "Duration") {
            navigation.navigate('DurationScreen', {
                exerName: exercise,
                sgWorkOut: suggest,
            });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Exercises</Text>
          <FlatList 
            data = {exerciseArray}
            renderItem={({item}) => 
            <View>
              <Button onPress={() => handlePressEvnt(item.exercise, item.type, item.sgWorkOut)} title={item.exercise}/>
            </View>}
            keyExtractor={(item) => item.key}/>
        </SafeAreaView>
      );
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
      }
    });
    