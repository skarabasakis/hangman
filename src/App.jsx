import Footer from "./components/Footer"
import Header from "./components/Header"
import Letterboard from "./components/Letterboard"
import Puzzle from "./components/Puzzle"
import Results from "./components/Results"
import Score from "./components/Score"

function App() {
  return (
    <>
      <Header />
      <main>
        <Score />
        <Puzzle />
        <Letterboard />
      </main>
      <Results />
      <Footer />
    </>
  )
}

export default App
