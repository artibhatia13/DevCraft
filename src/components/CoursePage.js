import React from "react";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return <div></div>;
};

export default CoursePage;
