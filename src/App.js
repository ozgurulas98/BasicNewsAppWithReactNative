import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import news_data from "./news_data.json";
import NewsCard from "./companents/NewsCard";
import news_banner_data from "./news_banner_data.json";

const App = () => {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  const keyExtractorItem = (item) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>News</Text>
      <FlatList
        ListHeaderComponent={
          //üstünde kompanent gösterebilmek için
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map((bannerNews) => (
              <Image
                style={styles.banner_image}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        }
        keyExtractor={keyExtractorItem}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#eceff1",
  },
  banner_image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 50,
  },
});

export default App;