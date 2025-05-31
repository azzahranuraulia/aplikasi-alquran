import React, { useState } from 'react';
import { Text, FlatList, View, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { Cardku } from './daftar';
import { Dataku, getAlquran } from './data';

export default Home = ({ navigation }) => {
  const [alquran, setAlquran] = useState([]);
  getAlquran(setAlquran);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> 🕌 Kitab Suci Al-Quran</Text>
      </View>

      <FlatList
        data={alquran}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', { data: item })}
            activeOpacity={0.8}
            style={styles.card}
          >
            <Cardku surah={item.name} arti={item.name_translations.id} nav={navigation} data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#E3F2FD', // Warna biru muda pastel
  },
  header: {
    paddingVertical: 15,
    backgroundColor: '#E3F2FD',
    borderBottomWidth: 2,
    borderBottomColor: '#90CAF9', // Biru pastel lebih gelap
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#1565C0',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#90CAF9', // Biru pastel lembut
    marginVertical: 12, // Jarak antar kartu lebih lebar
    paddingVertical: 18, // Padding vertikal lebih besar
    paddingHorizontal: 15, // Padding horizontal tetap nyaman
    borderRadius: 20, // Sudut kartu lebih bulat untuk desain lebih halus
    shadowColor: '#1565C0', // Bayangan lebih lembut dengan biru
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8, // Efek 3D lebih nyata
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
