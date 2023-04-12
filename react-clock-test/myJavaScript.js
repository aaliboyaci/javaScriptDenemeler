
 const root = ReactDOM.createRoot(
    document.getElementById('root'));



  function tick() {
    
    const element2 = (
      <div>
        <h1>Time !</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element2);
  }
  
  setInterval(tick, 1000);