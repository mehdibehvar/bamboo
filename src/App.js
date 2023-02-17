
import {  useEffect, useState } from 'react';
import {  getAllCourses } from './utils/httpclient';
import './assets/css/App.scss';
import Achivments from './components/achivments/Achivments';
import BannerSection from './components/bannersection/BannerSection';
import CoursesSection from './components/CoursesSection/CoursesSection';
import Layout from './components/layouts/Layout';
import NewsSection from './components/newssection/NewsSection';
import SuggestionSection from './components/suggestionSection/SuggestionSection';



function App() {
  const [courses, setCourses] = useState([]);
 
  const getCourses=async ()=>{
    const response= await getAllCourses();
   setCourses(response.result)
  }
useEffect(() => {
getCourses();
}, [])

  return (
    <div className="App">
      <Layout>
       <Achivments/>
       <CoursesSection courses={courses}/>
       <BannerSection/>
       <NewsSection/>
       <SuggestionSection/>
      </Layout>
    </div>
  );
}

export default App;
