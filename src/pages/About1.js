import React from "react";
import About from "../assests/about.jpg";
import "../styles/About.css";

function About1() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${About})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque
          beatae, natus perferendis illum unde vel accusamus ipsa minima
          quisquam officiis distinctio doloremque adipisci eum laborum inventore
          totam explicabo consequatur, maiores quam incidunt quod dolorem
          molestiae. Sequi ducimus tempora et provident, suscipit soluta fugit
          laboriosam voluptate. Et vitae ad nam hic perspiciatis nobis iste,
          quod quos, maxime temporibus at quisquam obcaecati ipsa eum pariatur
          culpa fuga. Quos numquam magni laboriosam, eligendi explicabo sunt?
          Voluptatum enim voluptas sint explicabo quae veritatis, tenetur
          adipisci assumenda aut ullam fuga ipsa neque repellendus amet
          provident incidunt repellat eaque nihil dicta a! Architecto, a ex.
        </p>
      </div>
    </div>
  );
}

export default About1;
