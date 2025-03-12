import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";

export default function index() {
  const showAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="chevron-back-outline" size={30} color="white" />
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            UserId
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="notifications-outline" size={30} color="white" />
          <Feather name="more-horizontal" size={30} color="white" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View
          style={{
            gap: 15,
            backgroundColor: "black",
            width: "100%",
            paddingHorizontal: 15,
            paddingTop: 15,
            paddingBottom: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              gap: 15,
            }}
          >
            <LinearGradient
              colors={["#F6017A", "#D10869", "#B7098B", "#F77737", "#FFDC80"]}
              style={{
                borderWidth: 3,
                borderRadius: 55,
                padding: 3,
              }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  borderRadius: 50,
                  padding: 3,
                }}
              >
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IQ0E8QBrwViT6tBHS5ON7yK3wjZal2-EgQ&s",
                  }}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 50,
                  }}
                />
              </View>
            </LinearGradient>
            <View style={{ flexDirection: "column", gap: 10 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "white" }}
              >
                Sait
              </Text>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 17, color: "white" }}
                  >
                    20
                  </Text>
                  <Text style={{ color: "white" }}>posts</Text>
                </View>
                <View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 17, color: "white" }}
                  >
                    20
                  </Text>
                  <Text style={{ color: "white" }}>followers</Text>
                </View>
                <View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 17, color: "white" }}
                  >
                    20
                  </Text>
                  <Text style={{ color: "white" }}>following</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ color: "gray" }}>University</Text>
            <Text style={{ color: "white" }}>
              We inspire, educate and inovate, with and for our students. Tag
              your with <Text style={{ color: "#769BB6" }}>#hereAtSAIT</Text>{" "}
              for a chance to be featured!
            </Text>
            <Text style={{ color: "white" }}>
              Current <Text style={{ color: "#769BB6" }}>@hereatsait</Text>
            </Text>
            <Text style={{ color: "#769BB6" }}>
              1301 16 Ave NW, Calgary, Alberta
            </Text>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <MaterialIcons name="link" size={20} color="white" />
              <Text style={{ color: "white" }}>sait.ca and 1 more</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#4553BD",
                borderRadius: 5,
                flex: 1,
                height: 33,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>Follow</Text>
            </View>

            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 5,
                flex: 1,
                height: 33,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={() => router.push("/message")}>
                <Text style={{ color: "white" }}>Message</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 5,
                flex: 1,
                height: 33,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>Contact</Text>
            </View>
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 5,
                flex: 0.3,
                height: 33,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="person-add" size={20} color="white" />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              paddingHorizontal: 50,
              paddingBottom: 2,
            }}
          >
            <View style={{ position: "relative", alignItems: "center" }}>
              <Ionicons
                name="grid-outline"
                size={30}
                color="white"
                style={{ paddingBottom: 10 }}
              />

              <View
                style={{
                  position: "absolute",
                  bottom: -2,
                  width: 60,
                  height: 2,
                  backgroundColor: "white",
                }}
              />
            </View>

            <FontAwesomeIcon name="play-circle" size={30} color="white" />
            <FontAwesomeIcon name="user-o" size={30} color="white" />
          </View>
        </View>

        <View style={styles.imageGrid}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IQ0E8QBrwViT6tBHS5ON7yK3wjZal2-EgQ&s",
            }}
            style={styles.imageCell}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
            }}
            style={styles.imageCell}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
            }}
            style={styles.imageCell}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
            }}
            style={styles.imageCell}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
            }}
            style={styles.imageCell}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
            }}
            style={styles.imageCell}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Alert" onPress={showAlert} color={"white"} />
      </View>

      {/* <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push("/feed")}>
          <Ionicons name="home-outline" size={30} color="white" />
        </TouchableOpacity>
        <Ionicons name="search-outline" size={30} color="white" />
        <Ionicons name="add-circle-outline" size={30} color="white" />
        <FontAwesomeIcon name="play-circle" size={30} color="white" />
        <Feather name="user" size={30} color="white" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 0,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "black",
  },
  footer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    borderTopWidth: 0.5,
    borderColor: "black",
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "black",
    paddingBottom: 40,
  },
  imageGrid: {
    flexGrow: 1,
    backgroundColor: "black",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0.3%",
  },
  imageCell: {
    width: "33%",
    height: "100%",
    aspectRatio: 0.66,
    resizeMode: "cover",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
});
