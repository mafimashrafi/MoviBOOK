

const API_BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Generic fetch handler for all API requests
 * @param {string} endpoint - The API endpoint (e.g., '/landing', '/login')
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {object} data - Data to send (for POST/PUT requests)
 * @returns {Promise} - Response from the backend
 */
export const apiCall = async (endpoint, method = 'GET', data = null) => {
    try {
        const config = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (data) {
            config.body = JSON.stringify(data);
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('API Call Error:', error);
        throw error;
    }
};

/**
 * GET request
 */
export const getRequest = (endpoint) => {
    return apiCall(endpoint, 'GET');
};

/**
 * POST request
 */
export const postRequest = (endpoint, data) => {
    return apiCall(endpoint, 'POST', data);
};

/**
 * PUT request
 */
export const putRequest = (endpoint, data) => {
    return apiCall(endpoint, 'PUT', data);
};

/**
 * DELETE request
 */
export const deleteRequest = (endpoint) => {
    return apiCall(endpoint, 'DELETE');
};

// Export API_BASE_URL for reference
export default API_BASE_URL;
