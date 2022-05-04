import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import Routers from "./router";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routers />
      <Widget />
      <Footer />
    </div>
  );
}

export default App;
