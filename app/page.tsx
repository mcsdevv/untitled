// * Components
import Button from "@components/Button";
import Graphs from "@components/Landing/Graphs";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pt-16 pb-8 text-7xl">Compare Database Performance</h1>
      <Graphs />
      <p className="pt-4">
        The data above is based on a simple get user call made to each database
        every 5 minutes.
      </p>
      <p className="pt-4">
        Login to see how they perform in various other scenarios.
      </p>
      <Button className="mt-4" text="Login" />
    </div>
  );
}
