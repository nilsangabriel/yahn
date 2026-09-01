const base_url = "https://hacker-news.firebaseio.com/v0/";

// Fetch the top stories on the Hacker news
//
// This function uses get requests on the top stories,
// returning the story ids.
export async function fetchTopStories() {
  const response = await fetch(`${base_url}/topstories.json`);

  if (!response.ok)
    throw new Error(`Failed to fetch top stories, Error: ${response.status}`);

  return response.json();
}

// Gets each item details per id
//
// This function uses get requests on the story id,
// returning information about the id.
export async function getItem(storyId: number) {
  const response = await fetch(`${base_url}/item/${storyId}.json`);

  if (!response.ok)
    throw new Error(`Failed to fetch story ${storyId}, Error: ${response.status}`);

  return response.json();
}

export async function getStories(limit: number = 20) {
  const ids = await fetchTopStories();
  const batch = ids.slice(0, limit);

  // Using Promise to request in parallel, making it faster to fetch stories.
  return Promise.all(batch.map(getItem));
}
