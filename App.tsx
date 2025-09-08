import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  const age = 20;
  let feedback ='';
  const LicenseYears = 5;

  if (age >= 18)
    /*the condition age >=18 was true*/
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


// adding a swicth statement
let drivingRank='';
switch(LicenseYears) {

    case 0: 
     drivingRank='newbie driver';
     break;
     
    case 1:
      drivingRank ='Rookie with 1 year of driving experience';''
    break;
    
    case 2:
      drivingRank ='Rookie with 1 year of driving experience';
    break,
    
     case 3:
     case 4:
      drivingRank ='Experienced driver';
      break;
      default:
        drivingRank = 'veteran driver with many years experience';





} 
  



  
  return (
    <SafeAreaView style= {styles.container}> 
    
     <View style= {styles.content}>
      {/* add a costom style and other text component specific styles to the heading */}
      <Text style ={[styles.Response, {fontSize:48,color:'black', marginBottom:35, textAlign:'center'}]}>Draving License Checker 
      </Text>

       {/*Our Image.*/}
       <Image
       source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixAoC2wuwU8X7ukgYb9obru3mSsgvm6rCSQ&s.jpeg', }}
       style = {styles.image}/>
       
       <Text style ={styles.Response}>Age: {age}</Text>
       <Text style ={styles.Response}>LicenseYears {LicenseYears}</Text>
    <Text style ={[styles.Response ,{fontSize:48,color:'black', marginBottom:35, textAlign:'center'}]}>
      {feedback} {/* This is my message to be displayed to the user */}
     
      </Text>

      <Text style ={[styles.Response ,{fontSize:48,color:'black', marginBottom:35, textAlign:'center'}]}> Driving Rank 
      {drivingRank} {/* This is the driving Text compnents */}
     
      </Text>
     
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE2586',
    alignItems: 'center',
    justifyContent: 'center',
  },

    content: {
       width : '100%',
       alignItems :'center',

    },

   Response :{
    fontSize : 28 ,
    color: 'white',
    fontWeight : 'bold',
    marginVertical : 30
    
  },
  
   image:{
    width: '100%',
    height: '50%',
    resizeMode:'cover',
    top: 0,
   },
});
