import './App.css';
import Body from './components/Body';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter basename='/'>
       <Routes>
        <Route path='/' element={<Main/>}>
        <Route index element={<Body />} />
          <Route path='/plans' element={<Result/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
