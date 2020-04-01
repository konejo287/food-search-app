import { useEffect, useState } from 'react';
import yelp from '../api/yelp';



export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('searchAPI');
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);    
        } catch (err) {
            setErrMsg('error');
        }
        
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errMsg];
}