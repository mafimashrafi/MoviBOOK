import { useState, useEffect } from "react";
import { getRequest } from "../services/api";
import RouterBtn from "../components/RouterBtn";

export default function SharedWatchList () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSharedWatchListData();
    }, []);

    const fetchSharedWatchListData = async () => {
        try {
            setLoading(true);
            const response = await getRequest('/sharedwatchlist')
            setData(response);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error('Failed to fetch data:', err)
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <h4>Shared watchlist from friends</h4>
            <div style={{marginTop: '20px'}}>
                <RouterBtn
                    label = "Home"
                    to="/home" 
                    varient="secondary"
                    size="md"
                />
            </div>
        </>
    );
}