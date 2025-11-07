
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import About from '../pages/about/About';
import Details from '../pages/details/Details';
import PrivateRouter from './PrivateRouter';
import Favourites from '../pages/favourites/Favourites';
const AppRouter = () => {   
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path = "about" element = {<About/>}/>
                    <Route path = "details" element = {<PrivateRouter/>}>
                       <Route path="" element={<Details/>} />
                    </Route>
                    <Route path = "favourites" element = {<PrivateRouter/>}>
                       <Route path="" element={<Favourites/>} />
                    </Route>
                </Routes>
            
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;