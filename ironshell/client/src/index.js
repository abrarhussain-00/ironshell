import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Workouts from './routes/Workouts';
import {FaArrowUp} from 'react-icons/fa'
import Monday from './routes/trainingDays/Monday';
import Tuesday from './routes/trainingDays/Tuesday';
import Wednesday from './routes/trainingDays/Wednesday';
import Thursday from './routes/trainingDays/Thursday';
import Friday from './routes/trainingDays/Friday';
import Saturday from './routes/trainingDays/Saturday';
import Sunday from './routes/trainingDays/Sunday';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='' element={<App/> }>
          <Route path='home' element={<Home/> }/>
          <Route path='workout' element={<Workouts/> }>
            {""}
            <Route path='monday' element={<Monday/>}/>
            <Route path='tuesday' element={<Tuesday/>}/>
            <Route path='wednesday' element={<Wednesday/>}/>
            <Route path='thursday' element={<Thursday/>}/>
            <Route path='friday' element={<Friday/>}/>
            <Route path='saturday' element={<Saturday/>}/>
            <Route path='sunday' element={<Sunday/>}/>

          <Route index element={<main className='card bg-orange m-3'>
            <h5 className='text-white p-1 d-flex justify-content-around align-items-center'>
              <FaArrowUp/>
                Choose a workout day
              <FaArrowUp/>
            </h5>
          </main>}/>
          </Route>
          <Route path='*' element={<main>
            <p>Theres nothing here!</p>
          </main>}/>
        </Route>
    </Routes>
  </Router>
  </React.StrictMode>
);


