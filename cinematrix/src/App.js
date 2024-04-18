
import './App.css';
import Home from './Home.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SingleMovie from './SingleMovie.jsx';
import Error from './Error.jsx';
import {AppProvider} from './Context.jsx'


function App() {
  return (
    <AppProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movie/:id" element={<SingleMovie/>}/>
    <Route path="*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
   </AppProvider>
  );
}

export default App;
