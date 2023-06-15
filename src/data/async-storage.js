import AsyncStorage from "@react-native-async-storage/async-storage"

const setAsyncStorageItem = async ( key, value ) => {

    await AsyncStorage.setItem(key, value)
        .then( res => console.log("ITEM ADDED OKAY ✅", res) )
        .catch( err => console.log("ITEM ADDED ERROR ", err.message) )
}

const getAsyncStorageItem = async (key) => {
    const value = await AsyncStorage.getItem(key)
    return value !== null ? value : undefined;
}

export { 
    setAsyncStorageItem,
    getAsyncStorageItem
}