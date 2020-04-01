import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errMsg] = useResults();

    

    const filterResultsByPrice = (price) => {
        console.log();
        if(results) {
            return results.filter(result => {
                return result.price === price; 
            });
        }
        
    }

    return (
        <View style={{ flex: 1}}>
            <SearchBar onTermSubmit={() => searchApi(term)} term={term} onTermChange={(newTerm) => setTerm(newTerm)} />
            <Text>{errMsg}</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Procier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Expenser"/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
