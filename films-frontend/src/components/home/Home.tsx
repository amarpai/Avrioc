import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Home(): JSX.Element {
  let history = useHistory();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchPosts = async (): Promise<any> => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/films`
      );
      const json = await response.json();
      setFilms(json);
    };
    fetchPosts();
  }, []);

  return (
    <section className="blog-area section">
      <div className="container">
        <div className="row">
          {films &&
            films.map(
              (film: {
                name: React.ReactNode;
                _id: any;
                description: string;
                photo: string;
              }) => (
                <div className="col-lg-4 col-md-6" key={film._id}>
                  <div className="card h-100">
                    <div className="single-post post-style-1">
                      <div className="blog-image">
                        <img src={film.photo} alt="Blog" />
                      </div>
                      <div className="blog-info">
                        <h4 className="title">
                          <span>
                            <h4>{film.name}</h4>
                          </span>
                          <span>
                            <div>{film.description}</div>
                          </span>
                        </h4>
                      </div>
                    </div>

                    <ul className="post-footer">
                      <li>
                        <Link
                          to={`/films/${film._id}`}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View Details{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
}

export default Home;
