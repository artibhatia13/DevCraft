import React, { useState } from "react";
import data from "../tempData";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const [courses, setCourses] = useState(data);

  const handleSearchQuery = (searchTerm) => {
    const filteredCourses = data.filter(({ title }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div className="dashboard container">
      <SearchBar
        placeholder="Search for courses"
        handleSearchQuery={handleSearchQuery}
      />
      <div className="courses row">
        {courses.length ? (
          courses.map((course) => <CourseCard {...course} />)
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
