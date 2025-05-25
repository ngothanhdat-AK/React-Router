import "./App.css";
import {Stack, Button} from "react-bootstrap";
import Home from "./pages/Home/index.jsx";
import {Routes, Route} from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Layout from "./Layout/Layout";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import BlogAll from "./pages/Blog/BlogAll.jsx";
import BlogDetail from "./pages/Blog/BlogDetail.jsx";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogAll />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route
          path="*"
          element={
            <Stack className="text-center">
              <h1>404 Not Found</h1>
              <Button variant="primary" href="/">
                Go to Home
              </Button>
            </Stack>
          }
        />
      </Routes>
    </>
  );
}

export default App;
//path phải khác nhau, nhưng element có thể giống nhau
//nhưng chả ai làm như vậy cả, vì nó không có ý nghĩa gì
