import './App.css';

//context
import productContextProvider from "../context/productContextProvider";


function App() {
  return (
      <productContextProvider>
        app
      </productContextProvider>
  );
}

export default App;
