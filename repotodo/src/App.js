import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [isData, setIsData] = useState();

  const token = process.env.REACT_APP_ACCESS_TOKEN;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_App_BACKEND +
            "/repos/angular/angular-cli/issues?page=8",
          config
        );

        setIsData([...res.data, res.data]);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  console.log(isData);
  return <>{isData && <button>확인하기</button>}</>;
}

export default App;
