import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomeComponent from './components/sections/home/home.component';
import ResumeProductComponent from './components/sections/resume-products/resume-product.component';
import DetailProductComponent from './components/sections/detail-product/detail-product.component';

const App = () => {

    return (
        <div className="App" data-testid="app-test">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}>
                    </Route>
                </Routes>
                <Routes>
                    <Route path="/items" element={<ResumeProductComponent/>}>
                    </Route>
                </Routes>
                <Routes>
                    <Route path="/items/:id" element={<DetailProductComponent/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
