import { useState, useEffect } from 'react';

function Debounce(value, delay) {
    const [debounced, setdebounced] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setdebounced(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debounced;
}
export default Debounce;
