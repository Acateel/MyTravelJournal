import './App.css'
import Header from "./components/Header"
import Journal from './components/Journal'
import data from "./data"

function App() {
  const journals = data.map(item => {
    return <Journal item={item}/>
  })

  return (
    <div className="App">
      <Header/>
      {journals}
    </div>
  )
}

export default App
