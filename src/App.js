import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./layout/HomePage";
import AddStudent from "./components/Add";
import EditStudent from "./components/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddStudent />} />
        <Route path='/edit/:_id' element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
