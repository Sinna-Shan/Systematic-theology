import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Torah from './pages/torah/Torah.jsx'
import Layout from './Layout.jsx'
import AOS from "aos";
import "aos/dist/aos.css"; 
import HistoryBooks from './pages/history_books/HistoryBooks.jsx'
import PoeticBooks from './pages/poetic_books/PoeticBooks.jsx'
import MajorProphets from './pages/major_prophets/MajorProphets.jsx'
import MinorProphets from './pages/minor_prophets/MinorProphets.jsx'
import Acts from './pages/acts/Acts.jsx'
import Gospel from './pages/gospel/Gospel.jsx'
import LettersOfPaul from './pages/letters_of_paul/LettersOfPaul.jsx'
import CommonLetters from './pages/common_letters/CommonLetters.jsx'
import Revelation from './pages/revelation/Revelation.jsx'

AOS.init({
  duration: 600,
  mirror: true

});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="torah" element={<Torah />} />
          <Route path="history" element={<HistoryBooks />} />
          <Route path="poetry" element={<PoeticBooks />} />
          <Route path="major_prophets" element={<MajorProphets />} />
          <Route path="minor_prophets" element={<MinorProphets />} />
          <Route path="gospel" element={<Gospel />} />
          <Route path="acts" element={<Acts />} />
          <Route path="letters_of_paul" element={<LettersOfPaul />} />
          <Route path="common_letters" element={<CommonLetters />} />
          <Route path="revelation" element={<Revelation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
