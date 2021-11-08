import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import Item from "./components/Item";
import { retrieveItems, storeItems } from "./utils/storageUtil";

const DATA = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    count: 0,
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    count: 0,
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    count: 0,
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    count: 0,
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    count: 0,
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    count: 0,
  },
];

const App = () => {
  const [listData, setListData] = useState(DATA);

  useEffect(async () => {
    let storedString = await retrieveItems();
    let newData = JSON.parse(storedString);
    setListData(newData);
  }, []);

  const renderItem = ({ item }) => (
    <Item
      data={item}
      onSort={(id, count) => {
        let newData = listData.map((el) =>
          el.id === id ? { ...el, count: count } : el
        );
        storeItems(JSON.stringify(newData));
        setListData(newData);
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData.sort((a, b) => b.count > a.count)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
