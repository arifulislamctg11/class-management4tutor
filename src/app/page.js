import Features from "@/components/Feature/Features";
import Hero from "@/components/Hero/Hero";
import { Button } from "@/components/ui/button";
import UpcomingClasses from "@/components/UpcomingClases/UpcomingClasses";

export default function Home() {
  return (
    <>
      {/**Hero section  */}
      <div className="p-2">
        {" "}
        <Hero />
      </div>
      {/**Features Section */}
      <div className="p-2">
        {" "}
        <Features />
      </div>
      {/**Upcoming Classes Section */}
      <div className="p-2">
        {" "}
        <UpcomingClasses />
      </div>
    </>
  );
}
