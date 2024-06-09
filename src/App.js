import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
