import axios from 'axios';
import { useEffect } from 'react';
import './assets/css/App.scss';
import Achivments from './components/achivments/Achivments';
import BannerSection from './components/bannersection/BannerSection';
import CoursesSection from './components/CoursesSection/CoursesSection';
import Layout from './components/layouts/Layout';
import NewsSection from './components/newssection/NewsSection';
import SuggestionSection from './components/suggestionSection/SuggestionSection';

function App() {
  useEffect(() => {
    axios.post('http://localhost:5000/api/auth/register',{
      "fullName": "mehdi Doe",
      "email": "mehdi2222@example.com",
      "password": "12345673",
      "phoneNumber": "09222222223",
      "birthDate": "1357/01/26",
      "nationalId":"6745556259"
  }).then((res)=>{
    return res;
    }).then(res=>console.log(res.data)).catch(err=>console.log(err.response.data))
  }, [])
  return (
    <div className="App">
      <Layout>
       <Achivments/>
       <CoursesSection/>
       <BannerSection/>
       <NewsSection/>
       <SuggestionSection/>
      </Layout>
    </div>
  );
}

export default App;
