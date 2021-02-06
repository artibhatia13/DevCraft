import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { Button, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../contexts/AuthContext";
import CourseCard from "./CourseCard";

export default function Profile() {
  const { currentUser, logout, allCourses } = useAuth();
  const history = useHistory();

  const [error, setError] = useState("");
  const [courses, setCourses] = useState([]);

  async function handleLogout() {
    setError("");
    try {
      logout().then(() => history.push("/login"));
    } catch {
      setError("Failed to Logout");
    }
  }

  useEffect(() => {
    setCourses(allCourses.filter((course) => course.enrolled));
  }, [allCourses]);

  return (
    <Container>
      {error && <Alert severity="error">{error}</Alert>}
      <h3>Profile</h3>
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
    </Container>
  );
}
