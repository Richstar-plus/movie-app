import { useLoaderData } from "react-router-dom";

export function HomePage() {
  const Movies = useLoaderData();
console.log(Movies);
  return (
    <>

    </>
  );
}
