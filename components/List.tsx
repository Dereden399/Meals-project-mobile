import { Octicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const List = ({ list, title }: { list: string[]; title: string }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={{ marginTop: 8 }}>
        {list.map((elem) => (
          <View style={styles.element} key={elem}>
            <Octicons
              name="dot-fill"
              size={24}
              color="black"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.text}>{elem}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#d8d8d8",
    fontSize: 18,
    flexWrap: "wrap",
    flex: 1,
  },
  element: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default List;
