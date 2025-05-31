import { View, Text, FlatList, StyleSheet } from "react-native";
import { getSurah } from "./data";
import { useState, useEffect } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Detail({ navigation, route }) {
  const [arti, setArti] = useState([]);

  useEffect(() => {
    getSurah(route.params.data.number_of_surah, setArti);
  }, [route.params.data.number_of_surah]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📖 Surah: {route.params.data.name}</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={arti}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.textContainer}>
              <Text style={styles.arabicText}>{item.text}</Text>
              <Text style={styles.translation}>{item.translation_id}</Text>
            </View>
            <FontAwesome6 style={styles.icon} name="book-quran" size={30} color="#1565C0" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Biru muda pastel
    paddingTop: 20,
  },
  header: {
    paddingVertical: 15,
    backgroundColor: '#E3F2FD',
    borderBottomWidth: 2,
    borderBottomColor: '#90CAF9', // Biru pastel lebih gelap
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565C0', // Warna biru yang sama dengan ayat
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#90CAF9", // Warna biru pastel
    padding: 15,
    marginVertical: 8,
    borderRadius: 15, // Membuat sudut lebih melengkung
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // Efek bayangan lebih besar
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  arabicText: {
    fontSize: 24, // Ukuran font lebih besar
    fontWeight: "bold",
    textAlign: "right",
    fontFamily: "Arial", // Font untuk karakter Arab
    color: "#1565C0", // Warna biru yang sama dengan judul surah
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  translation: {
    fontSize: 18,
    textAlign: "left",
    color: "#F5F5F5", // Mengubah warna terjemahan menjadi putih pudar
    marginTop: 5,
    lineHeight: 24, // Memberikan jarak antar baris untuk terjemahan
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  icon: {
    marginLeft: 15,
  },
});
