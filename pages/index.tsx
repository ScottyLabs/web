import type { NextPage } from "next";
import EventCarousel from "../src/components/EventCarousel";
import Hero from "../src/components/Hero";
import BaseLayout from "../src/layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout collapsedNavBar={false}>
      <Hero />
      <EventCarousel />
    </BaseLayout>
  );
};

export default Home;
