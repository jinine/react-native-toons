import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";

export default function HomePage({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://apipool.azurewebsites.net/api/toons")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const toonItem = ({ item }) => (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("ToonDetail", { id: item.id });
      }}
    >
      <View style={styles.itemRow} key={item.id}>
        <Image style={styles.image} source={{ uri: item.pictureUrl }} />
        <Text style={styles.fullname}>
          {item.firstName + " " + item.lastName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.main}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={toonItem}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingBottom: 30,
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginRight: 20,
    marginBottom: 10,
    width: 50,
    height: 75,
  },
  fullname: { fontSize: 20 },
  itemRow: { flexDirection: "row", marginLeft: 10 },
  main: {
    flex: 0.9,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
