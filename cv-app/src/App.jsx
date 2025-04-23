import './App.css'
import Education from './components/Education';
import Personal from './components/Personal';
import Profile from './components/Profile';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

export default function App() {
  
  return (
    <>
      <div className="inputDetails">
        
        <Personal />
        
        <Profile />

        <Education />

        <Skills />
        
        {/* <WorkExperience /> */}
        
      </div>

      <div className="cvPreview">


      </div>
    </>
  );
}