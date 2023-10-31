import React from "react";
import { Link } from "react-router-dom";

function Home() {
  let mainSections = [
    { id: 0, title: "products" },
    { id: 1, title: "restaurant " },
  ];
  return (
    <div className="row">
      {mainSections.map((mainSection) => (
        <div className="col-4" key={mainSection.id}>
          <div className="text-center py-5" key={mainSection.id}>
            <Link to={`/${mainSection.title}`} className="col-3 btn btn-primary">
              {mainSection.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
