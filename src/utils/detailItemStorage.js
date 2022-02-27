import AsyncStorage from '@react-native-async-storage/async-storage';

const itemStr = 'detailItem';

class DetailItemStorage {
  constructor(namespace = 'item') {
    this.namespace = namespace;
  }

  async removeDetailItem() {
    await AsyncStorage.removeItem(`${this.namespace}:${itemStr}`);
  }

  async setDetailItem(item) {
    await AsyncStorage.setItem(`${this.namespace}:${itemStr}`, JSON.stringify(item));
  }

  async getDetailItem() {
    const detailItem = await AsyncStorage.getItem(`${this.namespace}:${itemStr}`);
    return JSON.parse(detailItem);
  }
}

export default DetailItemStorage