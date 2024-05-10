

import { Suspense } from "react";
import PictureOfTheDay from "./components/PictureOfTheDay/PictureOfTheDay";
import styles from "./page.module.css";
import PictureOfTheDaySkeleton from "./components/PictureOfTheDay/PictureOfTheDaySkeleton/PictureOfTheDaySkeleton";

export default function Home() {
  return (
    <Suspense fallback={<PictureOfTheDaySkeleton />}>
      <PictureOfTheDay />
      
    </Suspense>
  );
}

