import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Snowflakes from './components/Snowflakes'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

function App() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Snowflakes />
            <AnimatedBackground />

            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Home />
                        <Footer />
                    </>
                } />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
