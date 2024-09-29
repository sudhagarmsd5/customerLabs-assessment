import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import ViewAudience from '@/pages/Audience/ViewAudience';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ViewAudience />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
