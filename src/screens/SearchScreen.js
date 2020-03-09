import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errMsg] = useResults();

    return (
        <View>
            <SearchBar onTermSubmit={() => searchApi(term)} term={term} onTermChange={(newTerm) => setTerm(newTerm)} />
            <Text>{results.length} results</Text>
            <Text>{errMsg}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
