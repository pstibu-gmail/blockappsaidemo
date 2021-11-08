import AsyncStorage from "@react-native-community/async-storage";

export function storeItems(value) {
  return new Promise(async function (resolve, reject) {
    try {
      await AsyncStorage.setItem("@BAAIDemoList", value);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}

export async function retrieveItems() {
  return new Promise(async function (resolve, reject) {
    try {
      const value = await AsyncStorage.getItem("@BAAIDemoList");
      if (value !== null) {
        resolve(value);
      }
    } catch (error) {
      reject(error);
    }
  });
}
