import React from "react";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const handleSearchQuery = (searchTerm) => {};

  const courses = [
    { id: 1, name: "Super advanced mechanics" },
    { id: 2, name: "Calculus for dummies" },
    { id: 3, name: "Mechanics the way like it!" },
    { id: 4, name: "Game Dev 101" },
    { id: 5, name: "Sophisticated algoritms to make you cry" },
  ];

  return (
    <div className="dashboard">
      <SearchBar
        placeholder="Search for courses"
        handleSearchQuery={handleSearchQuery}
      />
      <div className="courses">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            {course.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
