import { useState, useEffect } from 'react';
import { getRequest } from '../services/api';
import RouterBtn from '../components/RouterBtn';

export default function YourWatchList(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchYourWatchListData();
    }, []);

    const fetchYourWatchListData = async () => {
        try {
            setLoading(true);
            const response = await getRequest('/watchlist');
            setData(response);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error('Failed to fetch home data:', err);
        } finally {
            setLoading(false);
        }
    };
    return(
        <>
            <h4>All Your watch lists</h4>
            <div style={{ marginTop: '20px' }}>
                <RouterBtn 
                    label="Go to Home" 
                    to="/home" 
                    variant="primary"
                    size="md"
                />
            </div>
        </>
    );
}