import { useLoaderData } from "react-router-dom";


export function HomePage() {
  const Movies = useLoaderData();
console.log(Movies);
  return (
    <>
        <div className="hero-content">
          <h2>Welcome to Movie App</h2>
        </div>
    </>
  );
}
