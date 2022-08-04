import EventCarousel from "../src/components/EventCarousel";
import Hero from "../src/components/Hero";
import BaseLayout from "../src/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout collapsedNavBar={false}>
      <Hero />
      <EventCarousel />
    </BaseLayout>
  );
}
