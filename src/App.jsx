import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet animal={"Dog"} breed={"Havanese"} name={"Luna"} />
      <Pet animal={"Bird"} breed={"Cockatiel"} name={"Pepper"} />
      <Pet animal={"Cat"} breed={"Mixed"} name={"Doink"} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
