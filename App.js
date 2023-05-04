import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function App() {

  const [permission, requestPermission] = Camera.useCameraPermissions();
  console.log(permission);

  return (
    <View style={styles.container}>
      <Text>O aplicativo eu já estou editando, mas cadê a Steice que não vem logo?!?!</Text>
      <Button title='Abri camera' onPress={requestPermission} />
      <Camera style={styles.camera} type={CameraType.front}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 200,
    height: 400,
  }
});
