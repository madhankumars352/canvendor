import './App.css';
import Admin from './Admin';
import ProductAdd from './ProductAdd';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './Header';
import { ploaderlist } from './Admin';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Productdetails from './Productdetails';
import Admin1 from './Admin1';
import { pdetaloader } from './Productdetails';

const router = createBrowserRouter(
createRoutesFromElements(
  <Route element={<Header/>}>
    <Route index path="/" element={<Home/>}/>
    
    <Route path="admin" element={<Admin1/>}>
    <Route index element={<Admin/>} loader={ploaderlist}/>
    <Route path=":id" element={<Productdetails/>} loader={pdetaloader}/>
    </Route>
   
     
    <Route path="productadd" element={<ProductAdd/>}/>
  </Route>
)
)

function App() {
  return (
    <RouterProvider router={router}>
<div className="container">

<Admin/>
 </div>
    </RouterProvider>
    
  );
}



export default App;
