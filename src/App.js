import DisplayBody from './components/layouts/DisplayBody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayBody />} />
      </Routes>
    </Router>
  );
}

export default App;
