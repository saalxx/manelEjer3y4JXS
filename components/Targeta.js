import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Targeta = (props) => {
  // Estat simulat de l'usuari
  const esOnline = true; // Canvia a false per a provar l'estil condicional
  const esPremium = true;

  return (
  
  <View style={styles.targeta}>
        
        {/* 1. Estil base definit amb StyleSheet.create() */}
        <Text style={styles.nomUsuari}>{props.nom}</Text>
        <Text style={styles.rolUsuari}>{props.rol}</Text>

        {/* 2. Estil en línia (Inline style) per a un detall puntual */}
        <Text style={{ fontStyle: "italic", color: "#888888", marginTop: 4 }}>
          Membre des de: {props.dataUnio}
        </Text>

        {/* 3. Combinació d'estils amb Arrays i condició booleana */}
        <View
          style={[
            styles.insígniaEstat, // Estil base de la insígnia
            esOnline ? styles.insígniaOnline : styles.insígniaOffline, // Estil condicional
          ]}
        >
          <Text style={styles.textInsígnia}>
            {esOnline ? "Connectat" : "Desconnectat"}
          </Text>
        </View>

        {/* 4. Prioritat en Arrays: l'estil de la dreta sobreescriu el de l'esquerra */}
        {esPremium && (
          <Text style={[styles.textBase, styles.textDestacat]}>
            Usuària Premium
          </Text>
        )}
      </View>
 
  );
};

// Definició centralitzada dels estils
const styles = StyleSheet.create({
  
  targeta: {
    margin:10,
    width: "90%", // Amplària relativa 
    maxWidth: 360, // Amplària màxima adaptable 
    backgroundColor: "#ffffff",
    borderRadius: 16, // Cantonades arrodonides 
    padding: 20, // Espaiat interior 
    alignItems: "center", // Alineació de continguts al centre 
    // Ombres per a Android i iOS 
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  nomUsuari: {
    fontSize: 22, // camelCase sense "px" 
    fontWeight: "bold", // Text en negreta 
    color: "#1565c0",
  },
  rolUsuari: {
    fontSize: 15,
    color: "#555555",
    marginTop: 4, // Marge superior exterior 
  },
  insígniaEstat: {
    paddingHorizontal: 14, // Espai interior lateral
    paddingVertical: 6, // Espai interior vertical 
    borderRadius: 20,
    marginTop: 16,
  },
  insígniaOnline: {
    backgroundColor: "#e8f5e9", // Fons verd clar
  },
  insígniaOffline: {
    backgroundColor: "#ffebee", // Fons roig clar
  },
  textInsígnia: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2e7d32",
  },
  textBase: {
    fontSize: 14,
    color: "#666666",
    marginTop: 12,
  },
  textDestacat: {
    color: "#d81b60", // Sobreescriu el color de textBase per estar a la dreta en l'array
    fontWeight: "bold",
  },
});
export default Targeta;