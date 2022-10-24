import NavBar from "./components/navBar";
import NoteSection from "./components/noteSection";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <NoteSection />
    </div>
  );
}

export default App;
