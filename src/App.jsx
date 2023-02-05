import Drawer from "./components/Drawer";

const App = () => (
  <div>
    <Drawer></Drawer>
  </div >
);

const rootElement = document.getElementById("root");
rootElement.appendChild(<App />);

export default App;