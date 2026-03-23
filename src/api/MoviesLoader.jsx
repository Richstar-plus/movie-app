export async function MoviesLoader(type = "movies") {
  try {
    const endpoint =
      type === "series"
        ? "https://imdb-top-100-movies.p.rapidapi.com/series/"
        : "https://imdb-top-100-movies.p.rapidapi.com/";

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dfeaf6ba79mshf4a5472af01a80dp1af4aejsnc39c76c478a8",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });

    console.log("STATUS:", response.status);

    const data = await response.json();
    console.log("DATA:", data);

    if (!response.ok) {
      throw new Response(
        JSON.stringify({ message: data.message || "Failed request" }),
        { status: response.status }
      );
    }

    return data;
  } catch (error) {
    console.error("FETCH ERROR:", error);
    throw new Response(
      JSON.stringify({ message: "Network or CORS error" }),
      { status: 500 }
    );
  }
}