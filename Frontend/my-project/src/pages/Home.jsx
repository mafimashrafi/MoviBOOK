import { useState, useEffect } from 'react';
import { getRequest } from '../services/api';
import RouterBtn from '../components/RouterBtn';

export default function Home(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHomeData();
    }, []);

    const fetchHomeData = async () => {
        try {
            setLoading(true);
            const response = await getRequest('/home');
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
            <h4>This is home</h4>
            
            {loading && <p>Loading data from backend...</p>}
            
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            
            {data && (
                <div>
                    <p><strong>Backend Response:</strong> {data}</p>
                </div>
            )}

            <div style={{ marginTop: '20px' }}>
                <RouterBtn 
                    label="Back to Landing" 
                    to="/" 
                    variant="secondary"
                    size="md"
                />
            </div>
        </>
    );
}