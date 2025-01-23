import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7">
      <Sidebar/>
      <div className="lg:col-span-6">
        <Hero />
      </div>
    </div>
  );
}
