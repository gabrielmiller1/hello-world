import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu"
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "components/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route path='/' element={<Home />} />
          <Route path='sobremim' element={<AboutMe />} />
          <Route path='posts/:id' element={<Post/>} />
        </Route>
        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
