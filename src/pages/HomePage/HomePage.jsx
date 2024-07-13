
import { useEffect } from "react";
import { fetchFilm } from "../../api";

const HomePage = () => {
useEffect(() => {
  const asyncWrapper = async () => {
    const data = await fetchFilm("avatar");
    console.log(data);
  };

 asyncWrapper(); }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;