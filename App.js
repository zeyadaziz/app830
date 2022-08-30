
/*import React from "react";
import About from "./components3/About";
import Blog from "./components3/Blog";
import Contactus from "./components3/Contactus";
import Footer from "./components3/Footer";
 /* function App() {
  var lastname = 'aziz'
  var firstname = 'zeyad'
  var phone = 773652615261
  var Chicago ="Chicago"
  console.log("hi")
  return(
        <React.Fragment>
      <h1> {lastname+'    '+firstname}</h1>
      <p></p>
      <h2> phone:{phone}</h2>
      <p></p>
      <h2>Chicago: {Chicago}</h2>
      <About/>
      <Blog/>
      <Contactus/>
      <Footer/>

      </React.Fragment>

  )

}

export default App;*/
/*
import React from "react";
import from "./rcs/app.css";
function App() {
let data = {name: "bob",phone:9894637463,Address:'chicago' }
let arr = ['bob','john','kay',"oliver"]
console.log(data.name)
return(
  <div>
    <h1> Printing my 1 variable {arr[0]}</h1>          
<h1> Printing my 2 variable {arr[1] }</h1>    
<h1> Printing my 3 variable {arr[2]}</h1>       
<h1>My city is 4th vatiable {arr[3]}</h1>  
<h1>My city is 4th vatiable {arr[4]}</h1>
<h1>My city is 4th vatiable {arr[5]}</h1> 

 </div>
 )
}

export default App;
*/
/*
import React from "react";
import Home from './Components4/Home'
import About from "./Components4/About";
function App (){
  return (
    <>
  
    <h1>This is my app </h1>
    <About details={"welcome to home page"} />
    <Home data={"we are located in  chicago"} />
    </>
    
  )
  }

  export default App

*/
/*
import rect from 'react'
import './App.css'
const app =() => {
  return(
      <div>
      <h1>app components2020</h1>
      <div id="one">
        <p>this is div one</p>

        impage src='https://images.freeimages.com/images/large-previews/745/happy-friends-1057580.jpg'

      </div>
      <br />

      <div id="two">
        <p>this is class two</p>
        <audio controls autoPlay>
          <source src=''

          </audio>

          <video controls autoPlay muted>
            <source src='https://www.youtube.com/watch?v=atjqrB1yoZU'

          </video>

          <iframe>
          <source src=''

          </iframe>
          <source src=''

          



      </div>
  )




}
export default App
*/
/*
import React from 'react'
import Navbar from './Componentsz/Navbar'
import Home from './Componentsz/Home'
import {Routes,Route} from 'react-router-dom'
import Blog from './Componentsz/Bloge'
import Contact from './Componentsz/Contact'
import About from './Componentsz/About'
const App = () => {
  return (
    <div >
<Navbar />

<Routes>
  <Route exact path="/home" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
</Routes>
    

      <h1>the app </h1>
    </div>
  )
}

export default App*/

/*
import React ,{useState} from 'react'
const App = () => {
  const [transmission,setTransmission] = useState("parking")
  const turnTransmissionparking= ()=>{
    setTransmission('parking')
  }

 const turnTransmissionreverse = () =>{

  setTransmission('reverse')
 }
  return (
    <div>
      App is working
       <h1>{Transmission}</h1>
      <button type='button' onClick={()=>setTransmissionreverse()}>Click to ON</button>
      <button type='button' onClick={()=>setTransmissiondrive()}>Click to OFF</button>
    </div>
  )
}
export default App*/

/*import React ,{useState} from 'react'

function App() {
  const[count, setCount] = useState(4)

  function decrementcount(){
    setcount(prevcount=>prevcount - 1)
    setcount(prevcount=>prevcount - 1)




  return(
    <>
    <bottom onClick={decrementcount}>-</bottom>
    <span>{count}</span>
    <bottom>+</bottom>
              
    </>
    
  )


}

export default App
*/
/*
import React ,{useState} from 'react'
const App = () => {
  const [transmission,setTransmission] = useState("parking")
  const turnTransmissionparking= ()=>{
    setTransmission('parking')
  }
 const turnTransmissionreverse = () =>{
  setTransmission('reverse')
 }
  return (
    <div>
      App is working
       <h1>{transmission}</h1>
      <button type='button' onClick={()=>turnTransmissionparking()}>Click to ON</button>
      <button type='button' onClick={()=>turnTransmissionreverse()}>Click to OFF</button>
    </div>
  )
}
export default App
*/
/*
import React ,{useState} from 'react'
function App() {
  const[count, setCount] = useState(4)
  function decrementcount(){
    setCount(prevcount=>prevcount - 1)
    setCount(prevcount=>prevcount - 1)}
    function incrementCount(){
      setCount(prevcount => prevcount +1)
    }
  return(
    <>            
    <span>{count}</span><br />
    <button onClick={decrementcount}>-</button>
    <br />
    <button onClick={incrementCount}>+</button>
    </>
  )
}
export default App
*/
/*
import React,{useState,useEffect} from 'react'

const App = () => {
      const [Carparts,setStore]  = useState({'part1':'Bumpers',
                                         'part2':'Headlights',
                                        'part3':'Axle'})
      // console.log(store)

      const storeUpdate = () =>{
        setStore({'part1':'Bumpers',
                  'part2':'Headlights',
                  'part3':'Axle',
                  'part4':'Condensers'})
      }

      const deleteAll = () =>{
        setStore({})
      }

    useEffect(()=>{
      console.log("useffect is rendered or executed when update is clicked")
    })

  return (
   
    <div>
     Carparts. Categories of parts available
     <ol>
      <li>{Carparts.part1}</li>
      <li>{Carparts.part2}</li>
      <li>{Carparts.part3}</li>
      <li>{Carparts.part4}</li>

     </ol>

     <button type='button' onClick={()=> storeUpdate()}>Update Store</button>
     <button type='button' onClick={()=>deleteAll()}>Delete all</button>
          
    </div>
  )
}

export default App
*/
/*
// <---Type one---> 
import React,{useState,useEffect} from 'react'
const App = () => {
      const [store,setStore]  = useState({'location1':'11550 S Halsted St',
                                         'location2':'2222 N Cicero Ave',
                                        'location3':'2555 W Touhy Ave'})
      // console.log(store)
      const storeUpdate = () =>{
        setStore({'location1':'11550 S Halsted St',
                  'location2':'2222 N Cicero Ave',
                  'location3':'2555 W Touhy Ave',
                  'location4':'3035 N Pulaski Rd'})
      }
      const deleteAll = () =>{
        setStore({})
      }

 return (
    <div>
     AUTOZONE AUTO PARTS STORES NEAR YOU 
     <ol>
      <li>{store.location1}</li>
      <li>{store.location2}</li>
      <li>{store.location3}</li>
      <li>{store.location4}</li>
     </ol>
     <button type='button' onClick={()=> storeUpdate()}>Update Store</button>
     <button type='button' onClick={()=>deleteAll()}>Delete all</button>

    </div>
  )
}
export default App
*/



/*
import React , {useState,useEffect} from 'react'
const App =()=>{
  const [mammals,setMammals]=useState({'animal1': 'lion'
                                      'animal2': 'tiger',
                                      'animal3': 'zebra' })
  console.log(mammals);
  const mammalsType =()=>{
    setMammals({'animal1':'lion',
    'animal2':'tiger',
    'animal3':'zibra',
    'animal4': 'camel'});
  }
  const deletThemAll =()=>{
    setMammals({});
  }
   useEffect(()=>{
    console.log('use exeuted every time any changes or any')
   },[mammals]);
   return(
    <div style={{border:'9px solid purple'}}>
<h1 style={{color: 'turquoise'}}> There are some kinds of mammals.  {mammals}
    </h1>
    <ol>
      <li>{mammals.animal1}</li>
      <li>{mammals.animal2}</li>
      <li>{mammals.animal3}</li>
      <li>{mammals.animal4}</li>
     </ol>
     <button type='button' onClick={()=> mammalsType()}>Add It</button>
     <button type='button' onClick={()=> deletThemAll()}>Delet It</button>
  </div>
)
}
export default App;
*/

/*
// <---Type Two---> 
import React,{useState,useEffect} from 'react'
const App = () => {
      const [State,setState]  = useState({'State1':'Alabama',
                                         'State2':'Arizona',
                                        'State3':'California'})
      // console.log(store)
      const StateUpdate = () =>{
        setState({'State1':'Alabama',
                  'State2':'Arizona',
                  'State3':'California',
                  'State4':'Florida'})
      }
      const deleteAll = () =>{
        setState({})
      }
      useEffect(()=>{
        console.log('use exeuted every time any changes or any')
       },[State]);

 return (
    <div>
     BROWSE BY STATE
     <ol>
      <li>{State.State1}</li>
      <li>{State.State2}</li>
      <li>{State.State3}</li>
      <li>{State.State4}</li>
     </ol>
     <button type='button' onClick={()=> StateUpdate()}>Update State</button>
     <button type='button' onClick={()=>deleteAll()}>Delete all</button>

    </div>
  )
}
export default App
*/

/*
// <---Type Three---> 
import React,{useState,useEffect} from 'react'
const App = () => {
      const [State,setState]  = useState({'Course1':'Analytics certificate',
                                         'Course2':'Automated Software Testing',
                                        'Course3':'Business Information Technology'})
      // console.log(store)
      const StateUpdate = () =>{
        setState({'Course1':'Analytics certificate',
                  'Course2':'Automated Software Testing',
                  'Course3':'Business Information Technology',
                  'Course4':'Computer Science'})
      }
      const deleteAll = () =>{
        setState({})
      }
      useEffect(()=>{
        console.log('use exeuted every time any changes or any')
       },[]);

 return (
    <div>
     BROWSE By COURSE LISTS
     <ol>
      <li>{State.Course1}</li>
      <li>{State.Course2}</li>
      <li>{State.Course3}</li>
      <li>{State.Course4}</li>
     </ol>
     <button type='button' onClick={()=> StateUpdate()}>Update State</button>
     <button type='button' onClick={()=>deleteAll()}>Delete all</button>

    </div>
  )
}
export default App
                */

           /*
import React from 'react'
import Home from './components15/Home'
import About from './components15/About'
import Contact from './components15/Contact'
import Blog from './components15/Bloge'
import Navbar from './components15/Navbar'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    

    <div>
App testing all components by import them
<Navbar />

<Routes>
  <Route exact path='/home' element={ <Home />} ></Route>
  <Route  path='/about' element={ <About />} ></Route>
  <Route  path='/contact' element={ <Contact />} ></Route>
  <Route  path='/menu' element={ <Menu/>} ></Route>
</Routes>





    </div>
  )
}

export default App   
*/
/*
import React from 'react'
import Home from './components81/Home'
import About from './components81/About'
import Contact from './components81/Contact'
import Navbar from './components81/Navbar'
import {Routes,Route} from 'react-router-dom'
import Orders from './components81/Order'
import './App.css'


const App = () => {
  return (
    <div>
<Navbar />
<br /> <br />

<Routes>
  <Route exact path='/home' element={ <Home />} ></Route>
  <Route  path='/about' element={ <About />} ></Route>
  <Route  path='/contact' element={ <Contact />} ></Route>
  <Route  path='/orders' element={ <Orders/>} ></Route>
  <Route  path='/navbar' element={ <Navbar />} ></Route>

</Routes>





    </div>
  )
}

export default App

*/

/* test app
import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the supreme law of the land?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions *//*}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>What is the supreme law of the land?</div>
					</div>
					<div className='answer-section'>
						<button>New York</button>
						<button>London</button>
						<button>Paris</button>
						<button>Dublin</button>
					</div>
				</>
			)}
		</div>
	);
}
 /                           



*/
/*
import React from "react";
import Header from "./components18/Header";
import Home from "./components18/Home";
import About from "./components18/About";
import Footer from "./components18/Footer";
import Navbar from "./components18/Navbar";
import './App.css'
// functional es6 component
import {Routes,Route} from 'react-router-dom'
const App = () =>{
  var text = {fname:"bob",lname:"john",email:"build@gmail.com",jobtitle:"maneger",img :"https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg"}
  var text2 = {fname:"Tiger",lname:"Nixon",email:"build@gmail.com",jobtitle:"supervisor"}
  



   
  
 

  var imgVar =  "https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const videoLink = "https://youtu.be/UWdfaNWThnA"
  return(
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/home" element={  <Home shark={videoLink} />} />
        <Route exact path="/header" element={  <Header img = {imgVar} /> } />
        <Route exact path="/about" element={  <About text = {text}text2 ={text2} />} />
        <Route exact path="/footer" element={  <Footer />} />
      </Routes>
    
    <div>
       
      


    </div>
    </div>
  )
}

export default App;

*/
/*
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from './components22/Slider'
import Pop from './components22/Pop'
// gives us data
const ApiEndpoint = "https://dummy.restapiexample.com/api/v1/employees"

function App() {
  // 3step
  // 1 create usestate
  // 2 create fetch api and wrap it in a function
  const [quote,setQuotes]= useState('')

  const getQuote = () => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
    .then((response) =>(response.json()))
    .then((data) => setQuotes(data)); // add the data to our state local
   
  };

  // our getQuote function added only once. initial run. app is rendered
  useEffect(() => {
    getQuote();
    console.log("useeffect")
  }, []);

  const getNewQuote = () => {
    getQuote();
  };
  // getNewQuote()

  return (
    <div className="App" id="appContainer">
     
      <Paper elevation={3} style={{background:"lightBlue"}}>
      <Typography variant="h4">
        <marquee scrolldelay="65">
        {quote.content}
        </marquee>
        </Typography>
      </Paper>
    
      <Paper elevation={3}>
      <Typography variant="h6">{quote.author}</Typography>
      </Paper>
    
      <Paper elevation={3}>
      <Typography variant="h6">{quote.tags}{quote.length}{quote.authorSlug}</Typography>
      </Paper>
      <Pop quote= {quote}/>
       <Slider quote= {quote}/>
       
    <center>
      <Button variant="contained" color="secondary" size="large" onClick={getNewQuote}>Change quote</Button>
      </center>
         </div>
  );
}

export default App;
*/
/*
import {useState,useEffect} from 'react'
import './App.css';
import Navbar from './Navbar';
import SingleEmployee from './SingleEmployee';
import {Routes,Route} from 'react-router-dom'
import Allemployees from './Allemployees';
function App() {
  const [employee,setEmployee]= useState('')

  const getEmployee = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/employees`)
    .then((response) =>(response.json()))
    .then((data) => setEmployee(data)); 
   
  };

  useEffect(() => {
    getEmployee();
  }, []);

  // const getNewEmployee = () => {
  //   getEmployee();
  // };



  return (
    <div>
      <Navbar />

    <Routes>
      <Route eaxct path='/oneemployees' element={<SingleEmployee />} />
      <Route eaxct path='/allemployees' element={<Allemployees employee={employee} />} />
    
    </Routes>


   

    </div>
  );
}

export default App;


// how to solve errors> when there are no error? 
// first we have to find the component or line with error by commenting it.
*/



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselRb from './Components.js/CarouselRb'
import NavbarRb from './Components.js/NavbarRb'
import Home from './Components.js/Home'
import SingleEmployee from './SingleEmployee'
import EmployeeItem from './EmployeeItem'
import Card from './Components.js/Card'


function App(){
  return (
    <div className="App">
      <NavbarRb />
      <CarouselRb />
      <Home/>
      
  
      <h1>services</h1>
      <h5>IT Consulting</h5>
      <h5>Web Development</h5>
      <h5>Website</h5>
      <h5>Website</h5>
    
        </div>
        
  )
}

export default App;




