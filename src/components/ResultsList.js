import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            {   
                results ? 
                <FlatList 
                    horizontal
                    data={results}
                    keyExtractor={result => result.id}
                    renderItem={({ item }) => {
                        return <Text>{item.name}</Text>
                    }}
                />
                : <Text>No results now</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;