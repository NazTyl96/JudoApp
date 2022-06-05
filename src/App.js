import React, {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import './ui-kit/tables.css';
import './ui-kit/buttons.css';
import './ui-kit/text.css';
import './ui-kit/layouts.css';
import './ui-kit/elements.css';
import Sidepanel from './Sidepanel/Sidepanel.js';
import Main from "./Main/Main.js";
import Tournaments from "./Tournaments/Tournaments.js";

function App() {
  const [section, setSection] = useState('main');

  // let curSection;
  // switch (section) {
  //   case 'main':
  //     curSection = <Main />;
  //     break;
  //   case 'tournaments':
  //     curSection = <Tournaments />;
  //     break;
  //   case 'students':
  //     curSection = <Main />;
  //     break;
  // }

  function handleSectionClick(sectionId) {
      setSection(sectionId);
  }

  return <BrowserRouter>
      <Sidepanel curSection={section} onSectionClick={handleSectionClick} />
      <div className="page">
        <Routes>
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/tournaments" element={<Tournaments />} />
          <Route exact path="/pupils" element={<Main />} />
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Routes>
        {/* {curSection} */}
      </div>
    </BrowserRouter>
}

export default App;
