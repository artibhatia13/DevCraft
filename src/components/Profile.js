import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../contexts/AuthContext";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  const { currentUser, logout, allCourses, setAllCourses } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Logout");
    }
  }

  const [courses, setCourses] = useState(allCourses);

  useEffect(() => {
    setCourses(allCourses.filter((course) => course.enrolled));
  }, [allCourses]);
  return (
    <div>
      <h1>home page</h1>
      {error && <Alert severity="error">{error}</Alert>}
      <h6>Profile</h6>
      <h6>Email: {currentUser.email}</h6>
      <Link to="/updateprofile">Update Profile</Link>
      <br />
      <br />
      <Button variant="contained" onClick={handleLogout}>
        Log Out
      </Button>

      <h2>Enrolled Courses:</h2>
      <div className="row">
        {courses.length ? (
          courses.map((course) => (
            <CourseCard hideEnroll={true} key={course.id} {...course} />
          ))
        ) : (
          <div className="">
            <p>Sorry! No coures available as per your entered query</p>
          </div>
        )}
      </div>
    </div>
  );
}
