import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
const blockA = `Throughout TV history, cartoon stars have shined brightly, bringing joy
to children and adults alike. With so many classics out there, from Looney Tunes to
Hanna-Barbera to the likes of The Simpsons, South Park, SpongeBob SquarePants, and
even He-Man, it seems impossible to create a definitive list of the greatest cartoon
characters on TV. Yet, it must be done. We owe it to these animated characters to
compile them, vote, rerank, and debate. Our ranked list of the best cartoon characters
in TV history feature funny looking faces, crazy animated shows, and iconic voices.`;
const blockB = `What are some of your favorite cartoons? Think back to your
childhood and try to remember what all the kids were watching. From cool to weird
and everything in between, the most memorable fictional cartoon characters will stay
in pop culture (and our hearts) forever.`;
const blockC = `Have your say and support your favorite cartoon TV character by
voting them up. Whether they're old cartoon characters or simply the most popularand famous or the funniest, you'll find all the biggest names from classics below. And
remember, just because a character is on a great show does not mean that character,
alone, is one of the greatest of all time.`;
export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={img1} style={{ width: "100%", height: 300 }} />
        <Text style={styles.text}>{blockA}</Text>
        <Image source={img2} style={{ width: "100%", height: 300 }} />
        <Text style={styles.text}>{blockB}</Text>
        <Image source={img3} style={{ width: "100%", height: 300 }} />
        <Text style={styles.text}>{blockC}</Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
});
