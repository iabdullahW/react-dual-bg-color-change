import  { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ backgroundColor: isDarkMode ? 'black' : 'white', 

    height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <button 
        style={{
          backgroundColor: isDarkMode ? 'white' : 'black',
          color: isDarkMode ? 'black' : 'white',
          
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }} 
        onClick={toggleDarkMode}
      >

        {isDarkMode ? 'Light' : 'Dark'}

      </button>
    </div>
  );
}

export default App;
