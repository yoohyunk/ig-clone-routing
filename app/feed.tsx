import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get("window").width;

export default function Feed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IQ0E8QBrwViT6tBHS5ON7yK3wjZal2-EgQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topBar}>
          <View style={styles.leftContainer}>
            <Image
              source={{
                uri: "https://cdn.discordapp.com/attachments/1335300949773647975/1349210854326800445/Instagram-Wordmark-White-Logo.wine.png?ex=67d24606&is=67d0f486&hm=e066af008ea6cd6cd591215c2203c060cd8bf738578d93956c85b02f4d0b547b&",
              }}
              style={styles.logo}
            />
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </View>

          <View style={styles.rightContainer}>
            <Ionicons
              name="heart-outline"
              size={30}
              color="white"
              style={{ marginRight: 15 }}
            />
            <Ionicons name="chatbubble-outline" size={30} color="white" />
          </View>
        </View>

        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "black",
                borderRadius: 50,
                padding: 5,
                position: "relative",
              }}
            >
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IQ0E8QBrwViT6tBHS5ON7yK3wjZal2-EgQ&s",
                }}
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 50,
                }}
              />
              <View style={styles.plusCircle}>
                <Ionicons name="add" size={20} color="white" />
              </View>
            </View>

            <LinearGradient
              colors={["#F6017A", "#D10869", "#B7098B", "#F77737", "#FFDC80"]}
              style={{
                borderWidth: 3,
                borderRadius: 50,
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
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                  }}
                />
              </View>
            </LinearGradient>

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
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                  }}
                />
              </View>
            </LinearGradient>

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
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                  }}
                />
              </View>
            </LinearGradient>

            <LinearGradient
              colors={["#F6017A", "#D10869", "#B7098B", "#F77737", "#FFDC80"]}
              style={{
                borderWidth: 3,
                borderRadius: 50,
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
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                  }}
                />
              </View>
            </LinearGradient>

            <LinearGradient
              colors={["#F6017A", "#D10869", "#B7098B", "#F77737", "#FFDC80"]}
              style={{
                borderWidth: 3,
                borderRadius: 50,
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
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                  }}
                />
              </View>
            </LinearGradient>
          </ScrollView>
        </View>

        <View style={styles.post}>
          <ScrollView
            horizontal
            pagingEnabled={true}
            snapToInterval={screenWidth}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            style={styles.scrollView}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {images.map((image, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image
                  source={{
                    uri: image,
                  }}
                  style={styles.imageContainer}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>

          <View style={styles.dotsContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, currentIndex === index && styles.activeDot]}
              />
            ))}
          </View>

          <View style={styles.footer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 20,
              }}
            >
              <Ionicons name="heart-outline" size={30} color="white" />
              <Ionicons name="chatbubble-outline" size={30} color="white" />
              <Ionicons name="share-social-outline" size={30} color="white" />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Feather name="bookmark" size={30} color="white" />
            </View>
          </View>

          <Text style={styles.likedByText}>Liked by user1 and others</Text>

          <View style={styles.userComment}>
            <Text style={styles.userName}>user1</Text>
            <Text style={styles.commentText}>This is a sample comment!</Text>
          </View>

          <Text style={styles.dateText}>2 hours ago</Text>
        </View>

        <View style={styles.post}>
          <ScrollView
            horizontal
            pagingEnabled={true}
            snapToInterval={screenWidth}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            style={styles.scrollView}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {images.map((image, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image
                  source={{
                    uri: image,
                  }}
                  style={styles.imageContainer}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>

          <View style={styles.dotsContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, currentIndex === index && styles.activeDot]}
              />
            ))}
          </View>

          <View style={styles.footer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 20,
              }}
            >
              <Ionicons name="heart-outline" size={30} color="white" />
              <Ionicons name="chatbubble-outline" size={30} color="white" />
              <Ionicons name="share-social-outline" size={30} color="white" />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Feather name="bookmark" size={30} color="white" />
            </View>
          </View>

          <Text style={styles.likedByText}>Liked by user1 and others</Text>

          <View style={styles.userComment}>
            <Text style={styles.userName}>user1</Text>
            <Text style={styles.commentText}>This is a sample comment!</Text>
          </View>

          <Text style={styles.dateText}>2 hours ago</Text>
        </View>
      </ScrollView>

      {/* <View style={styles.navBar}>
        <Ionicons name="home-outline" size={30} color="white" />
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
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "black",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 40,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  post: {
    flex: 1,
    width: screenWidth,
    paddingVertical: 20,
    backgroundColor: "black",
  },
  imageWrapper: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  scrollView: {
    width: "100%",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
  },
  activeDot: {
    backgroundColor: "#1dd8f5",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  likedByText: {
    color: "white",
    paddingLeft: 10,
    fontSize: 14,
    marginTop: 5,
  },
  userComment: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 5,
  },
  userName: {
    color: "white",
    fontWeight: "bold",
    marginRight: 5,
  },
  commentText: {
    color: "white",
  },
  dateText: {
    color: "white",
    fontSize: 12,
    paddingLeft: 10,
    marginTop: 5,
  },
  navBar: {
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
  plusCircle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    backgroundColor: "#1dd8f5",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
