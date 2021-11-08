import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import FaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntIcon from "react-native-vector-icons/AntDesign";
import { retrieveItemCount, storeItemCount } from "../utils/storageUtil";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const Item: React.FC = ({ data, onSort = () => {} }) => {
  return (
    <View style={styles.item}>
      <View style={styles.header}></View>
      <View style={styles.avatar}>
        <FastImage
          style={styles.avatarStyle}
          source={{
            uri: data.avatar,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <Text style={styles.title}>{data.first_name + " " + data.last_name}</Text>
      <View style={styles.rowItem}>
        <FaIcon name="email" size={20} color="grey" />
        <Text style={styles.titleRow}>{data.email}</Text>
      </View>
      <View style={styles.rowItem}>
        <FaIcon name="phone" size={20} color="grey" />
        <Text style={styles.titleRow}>987654567</Text>
      </View>
      <View style={styles.rowItem}>
        <FaIcon name="cake" size={20} color="grey" />
        <Text style={styles.titleRow}>11th OCT 1944</Text>
      </View>
      <View style={styles.divider}>
        <View style={styles.rowItemFooter}>
          <TouchableOpacity
            onPress={() => {
              onSort(data.id, data.count + 1);
            }}
          >
            <AntIcon name="like2" size={35} color="rgb(53,120,236)" />
          </TouchableOpacity>
          <View style={styles.footerLabelView}>
            <Text style={styles.titleRowFooter}>{data.count}</Text>
            <Text style={styles.titleRowFooter2}>VOTES</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (data.count !== 0) {
                onSort(data.id, data.count - 1);
              }
            }}
          >
            <AntIcon name="dislike2" size={35} color="rgb(53,120,236)" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    height: deviceHeight / 2.2,
  },
  title: {
    marginVertical: 15,
    fontSize: 24,
    alignSelf: "center",
  },
  titleRow: {
    fontSize: 15,
    marginLeft: 10,
    color: "grey",
  },
  titleRowFooter: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    color: "rgb(53,120,236)",
  },
  titleRowFooter2: {
    fontSize: 15,
    marginLeft: 10,
    color: "grey",
  },
  header: {
    height: deviceHeight / 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 6,
    backgroundColor: "rgb(171,201,250)",
  },
  avatarStyle: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  avatar: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: -45,
    padding: 10,
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    borderRadius: 100,
    elevation: 5,
    shadowColor: "#1a1917",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  rowItemFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  divider: {
    flex: 1,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
  },
  footerLabelView: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Item;
