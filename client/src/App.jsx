import React from 'react'
import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Auth from "./pages/auth"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App