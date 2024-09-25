import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import ViewAudience from '@/pages/Audience/ViewAudience';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewAudience />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
