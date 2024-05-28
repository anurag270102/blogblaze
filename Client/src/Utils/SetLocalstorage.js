const SetLocalstorage = (key, data) => {
    // Convert data to a JSON string if it is not already a string
    const value = typeof data === 'string' ? data : JSON.stringify(data);
    localStorage.setItem(key, value);
};

export default SetLocalstorage;
