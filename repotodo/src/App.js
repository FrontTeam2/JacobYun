import { useEffect, useState } from "react";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import BasicHeader from "./Layout/Header/Header";
import BasicFooter from "./Layout/Footer/Footer";
import styled from "styled-components";
function App() {
  // const [isData, setIsData] = useState();

  // const token = process.env.REACT_APP_ACCESS_TOKEN;
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await axios.get(
  //         process.env.REACT_App_BACKEND +
  //           "/repos/angular/angular-cli/issues?page=8",
  //         config
  //       );

  //       setIsData([...res.data, res.data]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getData();
  // }, []);
  // console.log(isData); //데이터 확인
  return <RouterProvider router={router} />;
}

export default App;
