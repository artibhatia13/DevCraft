import React, { useState } from "react";
import data from "../tempData";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";

const Dashboard = ({ allCourses, setAllCourses }) => {
  console.log(allCourses);
  const [courses, setCourses] = useState(allCourses);

  const handleSearchQuery = (searchTerm) => {
    const filteredCourses = data.filter(({ title }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  const handleEnroll = (id) => {
    const newCourseList = allCourses.map((course) => {
      if (course.id === id) {
        return {
          ...course,
          enrolled: !course.enrolled,
        };
      } else return course;
    });
    setAllCourses(newCourseList);
  };

  return (
    <div className="dashboard container">
      <SearchBar
        placeholder="Search for courses"
        handleSearchQuery={handleSearchQuery}
      />
      <div className="courses row">
        {courses.length ? (
          courses.map((course) => (
            <CourseCard handleEnroll={handleEnroll} {...course} />
          ))
        ) : (
          <div className="">
            <p>Sorry! No coures available as per your entered query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
