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

  // เลือกหนังเรื่องแรกจาก API (ถ้ามีข้อมูล)
  const movie = movies.length > 0 ? movies[0] : null;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6">
        <img
          src={`${imageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
        <p className="mt-2">{movie.overview}</p>

        {/* ใช้ <Link> แทนปุ่ม */}
        <Link
          href="/movie"
          className="mt-4 inline-block bg-blue-600 px-4 py-2 rounded"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
