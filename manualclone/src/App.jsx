
import './App.css'

function App() {

  return (
    <>
     <header>
      <div>
        <span>Manual Owl</span>
        <input placeholder='Manual Search'/>
      </div>
      <div>
        <ul>
          <li><a href=''>Home</a></li>
          <li><a href=''>My Manuals+</a></li>
          <li><a href=''>Manual Index</a></li>
          <li><a href=''>Categories</a></li>

        </ul>
      </div>
     </header>
     <div className='manual-select'>
      <h2>Locate the Free PDF Manual You Need!</h2>

      <select name='Brand'>
        <option value="Select a Brand...">Select a Brand...</option>
        <option value="Example">Example</option>
        <option value="Example">Example</option>
      </select>   
         <select name='Model'>
        <option value="Select a Model...">Select a Model...</option>
        <option value="Example">Example</option>
        <option value="Example">Example</option>
      </select>
      <select name='Category'>
        <option value="Select a Category...">Select a Category...</option>
        <option value="Example">Example</option>
        <option value="Example">Example</option>
      </select>
     </div>
    </>
  )
}

export default App
