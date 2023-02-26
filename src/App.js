import './App.css';

function App() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="app">


      <div className='nav'>
        <div className='logo'><span>TEDxALU</span></div>
        
         
            <a href='#events'>Events</a>
            <div class="dropdown">
              <a href="#get_involved" className='dropbtn'>Get Involved</a>
              <div class="dropdown-content">
                <a href="#speak">Apply to speak</a>
                <a href="#volunteer">Volunteer with us</a>
                <a href="#contact">Contact Us</a>
              </div>

            
            </div>
          

          
            <a href='#talks'>Talks</a>
          

          
            <a href='#blog'>Blog</a>
         


         
            <a href='#about'>About Us</a>
          
          
          
            
        
      </div>



      



      <header className="header">

        
        
        <p className='banner'>
          TedX ALU, &copy; 2022 <br /> 
          <span>What if?</span> 
          <br />
          Coming soon...
        </p>
        
          
      
      </header>


      <div className='body'>

          <section className='hero'>
              <div>

              </div>
          </section>
        

        
      </div>

      <footer>
          <section>

            <p> TEDxALURwanda is founded in the spirit of TED’s mission of Ideas Worth Spreading. </p>
          </section>

          
             <section>

              <p>The student-led organisation’s goal is to create unique experiences composed of interdisciplinary talks and engaging exchanges for all attendees..
                This independent TEDx Organisation is operated under license from TED.</p><br/>

            </section>

          

         
    </footer>
    <section className='copyright'>Copyright &copy; TedX ALU, {year}   </section>

    </div>
  );
}

export default App;
