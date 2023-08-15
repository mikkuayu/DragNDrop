import './App.css';
import {Main} from './components/Main.tsx'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div style={{fontSize: '20px', paddingTop: '10px'}}>Drag N Drop</div>
        <p style={{marginTop: '0px'}}>Drag items from one list to another</p>
      </header>
      <Main></Main>
      <footer className='footer'>
        <ul style={{textAlign: 'left', listStyleType: 'none'}}>
          <li style={{color: '#FFF', fontSize: '20px'}}>Heading 1</li>
          <li style={{color: '#FFF'}}>Item 1</li>
          <li style={{color: '#FFF'}}>Item 2</li>
          <li style={{color: '#FFF'}}>Item 3</li>
          <li style={{color: '#FFF'}}>Item 4</li>
          <li style={{color: '#FFF'}}>Item 5</li>
          <li style={{color: '#FFF'}}>Item 6</li>
        </ul>
        <ul style={{textAlign: 'left', listStyleType: 'none'}}>
          <li style={{color: '#FFF', fontSize: '20px'}}>Heading 2</li>
          <li style={{color: '#FFF'}}>Item 1</li>
          <li style={{color: '#FFF'}}>Item 2</li>
          <li style={{color: '#FFF'}}>Item 3</li>
          <li style={{color: '#FFF'}}>Item 4</li>
          <li style={{color: '#FFF'}}>Item 5</li>
          <li style={{color: '#FFF'}}>Item 6</li>
        </ul>
        <ul style={{textAlign: 'left', listStyleType: 'none', marginRight: '40px'}}>
          <li style={{color: '#FFF', fontSize: '20px'}}>Heading 3</li>
          <li style={{color: '#FFF'}}>Item 1</li>
          <li style={{color: '#FFF'}}>Item 2</li>
          <li style={{color: '#FFF'}}>Item 3</li>
          <li style={{color: '#FFF'}}>Item 4</li>
          <li style={{color: '#FFF'}}>Item 5</li>
          <li style={{color: '#FFF'}}>Item 6</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
