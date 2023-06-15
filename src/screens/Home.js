
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HAS_LAUNCHED } from '../utilities/constants';
import { getAsyncStorageItem, setAsyncStorageItem } from '../data/async-storage';
import { InfoToast, SuccessToast } from 'react-native-toast-message';

const Home = () => {

    const [hasLaunched, setHasLaunched] = useState(false);

    useEffect(() => {
      const getData = async () => {
        const hasLaunched = await getAsyncStorageItem (HAS_LAUNCHED);
        if (hasLaunched) {
            setHasLaunched(true);
        } else {
            await setAsyncStorageItem(HAS_LAUNCHED, "true");
        }
      }
    
      getData().catch( err => console.log("GET DATA ERROR", err) );
    }, [])
    

    return (
        <View style={[styles.container, hasLaunched ? { backgroundColor: "green" } : { backgroundColor: "black" } ]}>
            {hasLaunched ? <Text style={{ color: "white" }}>Welcome to your second time</Text> : <Text style={{ color: "white" }}>First time on app</Text>}
            {hasLaunched ? 
                <SuccessToast 
                    text1='Hello'
                    text2="OOOHHH, je vois ceci est premier tour sur l'App"
                    duration={3000}
                    position='bottom'
                /> 
                : 
                <InfoToast 
                    text1='Hello'
                    text2="Welcome for your second tour"
                />
            }
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});