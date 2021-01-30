import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  imgUrl,
  title,
  id,
  creator,
  description,
  handleEnroll,
  enrolled,
}) => {
  return (
    <div className="col s12 m4">
      <div className="card ">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator responsive-img" src={imgUrl} alt="" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
            <i className="material-icons right">more_vert</i>
          </span>
          <h6>{creator}</h6>
          <p>{description}</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {title}
            <i className="material-icons right">close</i>
          </span>
          <p>{description}</p>
          <Link to={`/course/${id}`}>Open Course</Link>
          <br />
          <div onClick={() => handleEnroll(id)} className="btn">
            {enrolled ? <p>UnEnroll</p> : <p>Enroll</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
