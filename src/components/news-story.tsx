import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator,  } from "react-native";
import { getStories } from "@/app/api/hn-api";

type StoryType = {
  id: number;
  title: string;
  by: string;
}

export default function NewsStory() {
  const [stories, setStories] = useState<StoryType[]>([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
          const data = await getStories(30);
          if (isMounted)
            setStories(data);
      } catch (err: any) {
          if (isMounted)
            setError(err.message);
      } finally {
          if (isMounted)
            isLoading(false);
      }
    };

    load();

    return () => { isMounted = false; };
  }, [])

  if (loading)
    return <ActivityIndicator className="items-center" size="large" />;

  if (error)
    return <Text className="items-center">Error: {error}</Text>;

  return (
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.by}</Text>
          </View>
        )}
      />
  )
}
