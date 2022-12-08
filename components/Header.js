import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/logo.png";
export default function Header(props) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <View>
          <Text style={styles.text}>{props.headerDisplay}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 35,
  },
  text: {
    fontSize: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
