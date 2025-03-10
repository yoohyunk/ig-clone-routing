import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";

export default function Message() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.user}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IQ0E8QBrwViT6tBHS5ON7yK3wjZal2-EgQ&s",
            }}
            style={{
              width: 34,
              height: 34,
              borderRadius: 50,
            }}
          />
          <View>
            <Text style={styles.userName}>sait</Text>
            <Text style={styles.usertype}>Business chat</Text>
          </View>
        </View>
        <View style={styles.call}>
          <Feather name="phone" size={24} color="white" />
          <AntDesign name="videocamera" size={24} color="white" />
        </View>
      </View>

      <ScrollView>
        <View style={styles.body}>
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
          <Text style={styles.userName}>sait</Text>
          <View>
            <Text style={styles.userInfo}>31K followers 1.4K posts</Text>
            <Text style={styles.userInfo}>
              You don't follow each other on Instagram
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={styles.viewProfile}
          >
            <Text style={styles.userName}>View profile</Text>
          </TouchableOpacity>

          <Text style={styles.igMessage}>
            You started a chat with sait. We use information from this chat to
            improve your experience.{" "}
            <Text style={styles.policy}>
              Learn about business chats and yor privacy.
            </Text>
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.tools}>
          <FontAwesome
            name="camera"
            size={18}
            color="white"
            style={styles.camera}
          />
          <Text style={styles.message}>Message...</Text>
        </View>
        <View style={styles.tools}>
          <Feather name="mic" size={26} color="white" />
          <AntDesign name="picture" size={26} color="white" />
          <MaterialCommunityIcons
            name="sticker-emoji"
            size={26}
            color="white"
          />
          <Feather name="plus-circle" size={26} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f13",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: "#838b93",
    paddingBottom: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    width: "60%",
  },
  userName: {
    color: "#f4f5f5",
    fontSize: 16,
    fontWeight: "bold",
  },
  usertype: {
    color: "#838b93",
    fontSize: 12,
  },
  call: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    paddingHorizontal: 5,

    backgroundColor: "#1c1e1f",
    paddingVertical: 5,
    borderRadius: 25,
  },
  tools: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    width: "40%",
  },
  camera: {
    backgroundColor: "#5453f9",
    borderRadius: 50,
    padding: 8,
  },
  message: {
    textAlign: "left",
    color: "#9da5af",
    fontSize: 16,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingVertical: 20,
    gap: 10,
  },
  userInfo: {
    textAlign: "center",
    color: "#838b93",
    fontSize: 16,
  },
  viewProfile: {
    marginTop: 10,
    textAlign: "center",
    color: "#e1e2e3",
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#e1e2e3",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  igMessage: {
    textAlign: "center",
    color: "#838b93",
    fontSize: 11,
  },
  policy: {
    color: "#636fc0",
  },
});
