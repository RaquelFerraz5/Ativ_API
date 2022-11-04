import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';


const request = async(callback) => {
  const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1 ');
  const parsed = await response.json();
  callback(parsed.data)
}

export default function App() {

  const [registro,setRegistros] = useState([]);

  useEffect(()=>{
    request(setRegistros);
  },[]);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Animes</Text>
      <StatusBar style="auto" />
      <FlatList
      data={registro}
      keyExtractor={(item)=>item.anime_id.toString()}
      renderItem={({item})=> 
     <Text style={styles.t}>
     Animes: {item.anime_name} 
     </Text>
    }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9EA0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  titulo:{
    marginTop:70,
    marginBottom:20,
    fontSize:25,
    color:'#000080',
    justifyContent: 'center',
    fontWeight: "900",
  },

  t:{
    fontSize:19,
    color: '#000000',
    justifyContent: 'center',
    fontWeight: "900",
    padding: 5
  }
});