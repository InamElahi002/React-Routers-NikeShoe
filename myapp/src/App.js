import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav >
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/Launch">Launch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Launch" element={<Launch />}>
          <Route index element={<LaunchIndex />} />
          <Route path=":Slug" element={<Launchshoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h2>Launch</h2>
      <Outlet />
    </div>
  );
}

function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/Launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={`${name} image`} style={{ width: "300px", height: "auto" }} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Launchshoe() {
  const { Slug } = useParams();
  const shoe = shoes[Slug]; 

  if (!shoe) {
    return <NotFound />;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={`${name} image`} style={{ width: "600px", height: "auto" }} />
    </div>
  );
}

const shoes = {
  "air-jordan-valor-blue": {
    name: "Valor Blue",
    img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png"
  },
  "jordan-mark-270-london": {
    name: "Jordan Mark 270 London",
    img: "https://runnerz.pk/cdn/shop/files/IMG_3596copy.jpg?v=1715841935"
  },
  "air-jordan-racer-blue": {
    name: "Racer Blue",
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
  }
};

export default App;
