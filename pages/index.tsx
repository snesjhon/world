import React from "react";

export default function Home() {
  return (
    <header className="container">
      <hgroup>
        <h1>Jhonatan Salazar</h1>
        <h2>
          Hi! 👋🏽 My full name is <em>Jhonatan Jesus Salazar Rodriguez</em>, but
          my friends call me <strong>Jhon</strong>
        </h2>
      </hgroup>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Lists</a>
          </li>
          <li>
            <a href="#">Recommendations</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
