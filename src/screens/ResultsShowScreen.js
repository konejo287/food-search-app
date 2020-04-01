 import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsshowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);

    var id = navigation.getParam('id');
    console.log('id is: ' , id)

    const getResult = async (id) => {
        var response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }}></Image>
                    )
                }}
            ></FlatList>
        </View>
    );    
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 300,
        height: 200
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsshowScreen;