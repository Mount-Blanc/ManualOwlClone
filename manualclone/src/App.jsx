
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
        <ul className='links'>
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
     <div className='banner'>
      <p>We have 810,573 Manuals, Service Guides and Product Documents all available for Free!!!</p>
     </div>
     <div className='content-section'>
      <h2>Featured Manual Categories</h2>
     </div>
     <div className='content-section'>
      <h2>Featured Products</h2>
     </div>
     <div className='content-section'>
      <h2>Featured Manuals</h2>
     </div>
     <footer>
      <ul className='footer-links'>
        <li><a href=''>Home</a></li>
        <li><a href=''>Manual Index</a></li>
        <li><a href=''>Manual Categories</a></li>
        <li><a href=''>About Us</a></li>
        <li><a href=''>Contact Us</a></li>
        <li><a href=''>Privacy</a></li>

      </ul>
     </footer>
    </>
  )
}

export default App
