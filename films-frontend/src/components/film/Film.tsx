import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function Film() {
  let { filmId } = useParams();

  const [film, setFilm] = useState<any>({});

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/films/${filmId}`
      );
      const json = await response.json();
      setFilm(json);
    };
    fetchData();
  }, [filmId]);

  return (
    <section className="post-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-0" />
          <div className="col-lg-10 col-md-12">
            {film && (
              <div className="main-post">
                <div className="post-top-area">
                  <h5 className="pre-title">Details for Film</h5>
                  <h3 className="title">
                    <span>
                      <b>{film.name}</b>
                    </span>
                  </h3>
                  <p className="para">
                    <b>Description: {film.description}</b>
                    <br />
                  </p>
                  <p className="para">
                    <b>Rating: {film.rating}</b>
                    <br />
                  </p>
                  <p className="para">
                    <b>release_date: {film.release_date}</b>
                    <br />
                  </p>
                  <p className="para">
                    <b>Country: {film.country}</b>
                    <br />
                  </p>
                  <p className="para">
                    <b>Ticket price: {film.ticket_price}</b>
                    <br />
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Film;
