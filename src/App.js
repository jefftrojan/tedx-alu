import './App.css';
import Card from './Components/Cards/Cards.js';

function App() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="app">


      <div className='nav'>
        <div className='logo'><span>TEDxALU</span></div>
        
         
            <a href='#events'>Events</a>
          

          
            <a href='#talks'>Talks</a>
          
          
            <a href='#blog'>Blog</a>
         
         
            <a href='#about'>About Us</a>
          
          
          
            
        
      </div>



      



      <header className="header">

        
        
      <div className='body'>

<section className='hero'>
   <main>
   <Card 
   
   />
   <br />


   </main>
   
</section>



</div>
        
          
      
      </header>


      

      <footer>
          <section>

            <p> TEDxALURwanda is founded in the spirit of TED’s mission of Ideas Worth Spreading. </p>
          </section>

          
             <section>

              <p>The student-led organisation’s goal is to create unique experiences composed of interdisciplinary talks and engaging exchanges for all attendees..
                This independent TEDx Organisation is operated under license from TED.</p><br/>
            

              <p>Copyright &copy; TedX <a href='https://alueducation.com'> ALU</a>, {year}</p>
            </section>

          

         
    </footer>
    </div>
  );
}

export default App;
