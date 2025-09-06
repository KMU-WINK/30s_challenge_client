import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>홈 화면</div>} />
        <Route path="checking" element={<div>출석체크 화면</div>} />
        <Route path="ranking" element={<div>랭킹보드 화면</div>} />
        <Route path="my" element={<div>마이페이지 화면</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
