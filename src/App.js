import Song from "./Components/Song/Song";


function App() {
  const songData = [
    { id: 0, title: 'Worthless Apology', artist: 'Intuicija'},
    { id: 1, title: 'Vociferate', artist: 'Teatre'},
    { id: 2, title: 'Prophecies', artist: 'Philip Glass'}
  ]

  return (
    <>
      {songData.map(element => {
        return <Song key={element.id} songData={element} />
      })}
    </>
  );
}

export default App;