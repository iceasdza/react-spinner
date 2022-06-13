import { Button } from "antd";
import { useCallback, useState } from "react";
import "./App.css";
import Spinner from "./components/spinner";

function App() {
  const [itemList, setItemList] = useState([
    { color: "cyan" },
    { color: "crimson" },
  ]);
  const handleAddColor = useCallback((e) => {
    setItemList((prev) => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      prev = [...prev, { name: e.target.value, color: `rgb(${r},${g},${b})` }];
      return prev;
    });
  }, []);
  return (
    <div className="App">
      <Spinner itemList={itemList} />
      <Button
        block
        size="large"
        style={{ marginTop: 24 }}
        onClick={handleAddColor}
      >
        Add Color
      </Button>
    </div>
  );
}

export default App;
