import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar/NavBar.jsx'
import { AllCourses } from './components/Home/allCourses.jsx'
import { FuterComponants, MainContent } from './components/Home/home.jsx'
import { AboutFooter } from './components/Footer/aboutFooter.jsx'
import { AllFuterHeding } from './components/Home/aboutCoursesHeding.jsx';
import { Contact } from './components/Home/contact.jsx';
import { ContactFrom } from './components/Home/contactFrom.jsx';
import { ContactHeader } from './components/Home/contactheader.jsx';
import { PdfHeader } from './components/Home/pdfHeader.jsx';
import { MycoursesHeader } from './components/Home/mycoursesHeader.jsx';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={[<MainContent />, <FuterComponants />]} />
          <Route path="/courses" element={[<AllFuterHeding />, <AllCourses />]} />
          <Route path="/pdf" element={<PdfHeader />} />
          <Route path="/mycourses" element={<MycoursesHeader />} />
          <Route path="/contact" element={[<ContactHeader />, <Contact />, <ContactFrom />]} />
        </Routes>
        <AboutFooter />
      </Router>
    </>
  )
}

export default App
