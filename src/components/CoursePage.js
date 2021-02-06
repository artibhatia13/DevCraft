import React from "react";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div style={{ marginTop: "40vh" }}>
      <h3>Coming soon... :)</h3>
    </div>
  );
};

export default CoursePage;
