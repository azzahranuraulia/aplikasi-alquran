import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home'; // Pastikan nama komponen sesuai dengan yang Anda gunakan
import Detail from './detail'; // Pastikan nama komponen sesuai dengan yang Anda gunakan
import { Image, Text, View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const HeaderTitleHome = () => (
    <View style={styles.headerTitleContainer}>
        <Image
            source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-LroGuFKo78mVOTpCix_6Fm6PVs-ycE01MC23G_umW9AqzWN2' }}
            style={styles.emojiImage}
        />
        <Text style={styles.headerTitleText}>My Alquran</Text>
    </View>
);

const HeaderTitleDetail = () => (
    <View style={styles.headerTitleContainer}>
        <Image
            source={{ uri: 'https://media.istockphoto.com/id/1387281844/id/vektor/kitab-suci-yang-mulia-al-quran-kareem-buka-vektor-ilustrasi-3d.jpg?s=612x612&w=0&k=20&c=MBQhP6BsZLeGs2HlzKhtc7rqViDzj5VOimE2__KNlMw=' }}
            style={styles.emojiImage}
        />
        <Text style={styles.headerTitleText}>Surah</Text>
    </View>
);

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerTitle: () => <HeaderTitleHome /> }} // Menggunakan komponen HeaderTitle untuk Home
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{ headerTitle: () => <HeaderTitleDetail /> }} // Menggunakan komponen HeaderTitle untuk Detail
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emojiImage: {
        width: 30, // Sesuaikan ukuran gambar
        height: 30, // Sesuaikan ukuran gambar
        marginRight: 5,
    },
    headerTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
});
