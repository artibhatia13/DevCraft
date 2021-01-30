import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { allCourses, setAllCourses } = useAuth();
  const [courses, setCourses] = useState(allCourses);

  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]);

  return (
    <div className="container">
      <h3>John Doe</h3>
      <h4>Enrolled Courses</h4>
    </div>
  );
};

export default ProfilePage;
