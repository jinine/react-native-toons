import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
export default function ToonDetail({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [toonData, setToonData] = useState([]);
  const { id } = route.params;
  let url = `https://apipool.azurewebsites.net/api/toons/${id}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setToonData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttontext}>Go back</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Image
            style={styles.storyimage}
            source={{ uri: toonData.pictureUrl }}
          />
          <Text style={styles.title}>ID: {toonData.id}</Text>
          <Text style={styles.title}>First Name: {toonData.firstName}</Text>
          <Text style={styles.title}>Last Name: {toonData.lastName}</Text>
          <Text style={styles.title}>Occupation: {toonData.occupation}</Text>
          <Text style={styles.title}>Gender: {toonData.gender}</Text>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },

  button: {
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#009688",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  storyimage: {
    height: 75,
    width: 50,
    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
  },
});

