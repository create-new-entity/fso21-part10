import AsyncStorage from '@react-native-async-storage/async-storage';

const accessTokenStr = 'accessToken';

class AuthStorage {

  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }
  
  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(`${this.namespace}:${accessTokenStr}`);
    return accessToken;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:${accessTokenStr}`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:${accessTokenStr}`);
  }
}

export default AuthStorage;