import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Landing } from "./Pages/Landing";
import { Top100 } from "./Pages/Top100";
import axios from "axios";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100&precision=0&x_cg_demo_api_key=CG-XVLfrMukFdJDUiwmevKLgW5Z`
      );
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen text-white">
      <Header show={show} setShow={setShow} />
      {show ? <Top100 data={data} /> : <Landing data={data} />}
    </div>
  );
}

export default App;
