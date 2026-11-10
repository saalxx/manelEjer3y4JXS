import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Targeta from "./components/Targeta";

const App = () => {
  // Estat simulat de l'usuari
  return (
    <View style={styles.contenidorPrincipal}>
      {/* Targeta base amb StyleSheet.create() */}
      <ScrollView>
<View>


  <Targeta nom="Manel Viel" rol="Desenvolupador WEB" dataReg="November 2026"/>
    <Targeta nom="Santino" rol="Desenvolupador WEB" dataReg="November 2026"/>
      <Targeta/>
</View>


      </ScrollView>

      </View>
  );
};
const styles = StyleSheet.create({
  contenidorPrincipal: {
    flex: 1, // Ocupa tot l'espai de la pantalla 
    backgroundColor: "#eef2f5",
    justifyContent: "center", // Centrat vertical 
    alignItems: "center", // Centrat horitzontal 
    padding: 20, // Espai interior 
  }})
  
export default App;
