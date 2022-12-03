// * Components
import Graphs from "@components/Landing/graphs";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="pt-16 pb-8 text-7xl">Compare Database Performance</h1>
      <Graphs />
    </div>
  );
}
