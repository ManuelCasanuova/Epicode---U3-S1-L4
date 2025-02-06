import "./App.css";
import Welcome from "./components/Welcome";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
import fantasy from "./books/fantasy.json";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList libri={fantasy} />
      <MyFooter />
    </>
  );
}

export default App;
