import Home from "./Components/Home/Home";


function App() {
  const songData = [
    { id: 0, title: 'Worthless Apology', artist: 'Intuicija'},
    { id: 1, title: 'Vociferate', artist: 'Teatre'},
    { id: 2, title: 'Prophecies', artist: 'Philip Glass'}
  ]

  return (
    <Home songData={songData} style={{style: ''}} />
  );
}

export default App;