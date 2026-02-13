
import './App.css'

function App() {
  

  return (
    <>
      <h1 className="text-3xl font-bold underline">Diverum</h1>
      <button className="bg-blue-500 text-white p-2 rounded-md">Click me</button>
      <input type="text" className="border-2 border-gray-300 rounded-md p-2" />
      <select className="border-2 border-gray-300 rounded-md p-2">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <textarea className="border-2 border-gray-300 rounded-md p-2"></textarea>
    </>
  )
}

export default App
