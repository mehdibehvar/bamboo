import './assets/css/App.scss';
import Achivments from './components/achivments/Achivments';
import CoursesSection from './components/CoursesSection/CoursesSection';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
       <Achivments/>
       <CoursesSection/>
      </Layout>
    </div>
  );
}

export default App;
