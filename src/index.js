import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.scss";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import Courses from "./pages/courses";
import Course from "./pages/course/[id]";
import Login from "./pages/login";
import Register from "./pages/register";
import { CssBaseline } from "@mui/material";
import StoreProvider from "./contexts/store";
import { SnackbarProvider } from "notistack";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
           <StoreProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:id" element={<Course />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
      </SnackbarProvider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
