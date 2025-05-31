import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const Cardku = (props) => (
  <TouchableOpacity 
    onPress={() => {
      props.nav.navigate("Detail", { data: props.data });
    }}
    activeOpacity={0.8}
  >
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.surah}>
          📖 Surah: {props.surah} 
        </Text>
        <Text style={styles.arti}>✨ Arti: {props.arti} </Text>
      </View>
      <FontAwesome5 name="mosque" size={35} color="#1565C0" style={styles.mosqueIcon} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 15, 
    borderColor: '#90CAF9', 
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 15, 
    backgroundColor: '#E3F2FD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 7, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%', 
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1, 
  },
  surah: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#1565C0', 
  },
  arti: {
    fontSize: 18, 
    color: '#2C3E50', 
    opacity: 0.8,
  },
  mosqueIcon: {
    marginLeft: 10, 
    marginTop: 10, 
  },
});
