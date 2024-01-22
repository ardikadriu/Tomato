import Firstsection from "./components/Firstsection";
import Header from "./components/Header";
import Secondsection from "./components/Secondsection";
export default function Home() {
  return (
    <main className="flex flex-col items-center  ">
      <Header />
      <Firstsection />
      <Secondsection />
    </main>
  );
}
