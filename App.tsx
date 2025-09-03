import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const age = 15;
  let feedback ='';
  const LicenseYears = 5;

  if (age >= 18) 
    if (LicenseYears >= 3)
      {
        feedback='you are a qualified , safe drive.👌'
       }
  else
      {
        feedback='you are allow to drive. YAY!😊'
      }else 
          {
          feedback = 'You are not allowed to drive yet😩'
         }
    




  return (
    <View style={styles.container}>
    <Text style ={styles.Response }>
      {feedback} {/* This is my message to be displayed to the user */}
       </Text>  
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE2586',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Response :{
    fontSize : 28 ,
    color: 'white',
    fontWeight : 'bold',
  } 
});
