
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Connect from "containers/pages/Connect";
import Profile from "containers/pages/user/Profile";
import Search from "containers/pages/Search";
import BlogCategory from "containers/pages/blog/category/BlogCategory";
import BlogPost from "containers/pages/blog/BlogPost";
import Blog from "containers/pages/blog/Blog";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display */}
          <Route path="*" element={<Error404 />} />
          {/*Home Display */}
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/perfil/:user_account" element={<Profile />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<BlogPost />} />
          <Route
            path="/blog/categories/:category_id"
            element={<BlogCategory />}
          />

          <Route path="/search/:term" element={<Search />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
