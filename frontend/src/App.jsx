import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Volunteer from './pages/Volunteer';
import Speaker from './pages/Speaker';
import Accomodation from './pages/Accomodation';
import WatchLive from './pages/WatchLive';
import Give from './pages/Give';
import Sermon from './pages/Sermon';
import Ebook from './pages/Ebook';
import SpeakerBio from './pages/SpeakerBio';
import Contact from './pages/Contact';
import Registeration from './pages/Registeration';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Bloglist from './pages/Bloglist';
import Error from './pages/Errror';
import Header from './components/Main/Header';
import Footer from './components/Main/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Normal Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registeration />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/ministers" element={<Speaker />} />
            <Route path="/hospitality" element={<Accomodation />} />
            <Route path="/live" element={<WatchLive />} />
            <Route path="/2024-ministers/:id" element={<SpeakerBio />} />
            <Route path="/give" element={<Give />} />
            <Route path="/sermon" element={<Sermon />} />
            <Route path="/books" element={<Ebook />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Bloglist />} />
            <Route path="/admin" element={<Admin />} />

            {/* Catch-all Route for Undefined Paths */}
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
