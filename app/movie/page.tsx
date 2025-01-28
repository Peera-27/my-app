import Link from "next/link";

async function getMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGZkOTc0NjJhMDI5ZDMxNjg4ODA0ZDc2M2IzYTViMSIsIm5iZiI6MTczODAzNTc4NS4yNzUsInN1YiI6IjY3OTg1MjQ5ZGY0YjAxOTFjZTJiMjM2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-wMGkHNrenqPaX97QLgon60a3QgtRd39NSSK9H3EA6Y",
    },
  };
  const result = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return null;
    });

  return result?.results || [];
}

export default async function Page() {
  const movies = await getMovies();
  console.log(movies);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-700 py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Trending Movies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={`${imageBaseUrl}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                  {movie.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{movie.overview}</p>
              </div>
              <button className="border-2 border-gray-800 rounded-lg px-6 py-2 mx-auto block text-gray-800 hover:bg-gray-800 hover:text-white transition">
                <Link href="/movie2">Details</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
