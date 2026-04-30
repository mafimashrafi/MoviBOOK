import { useState, useEffect } from 'react';
import { getRequest } from '../services/api';
import RouterBtn from '../components/RouterBtn';

export default function LandingPage(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLandingData();
    }, []);

    const fetchLandingData = async () => {
        try {
            setLoading(true);
            const response = await getRequest('/landing');
            setData(response);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error('Failed to fetch landing data:', err);
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <h4 className="text-center py-4"> Welcome to MoviBOOK </h4>
            <h4>This is a landing page</h4>
            
            {loading && <p>Loading data from backend...</p>}
            
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            
            {data && (
                <div>
                    <p><strong>Backend Response:</strong> {data}</p>
                </div>
            )}

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