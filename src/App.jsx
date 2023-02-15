import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import BoxSearchComponent from "./components/box-search/box-search.component";
import HomeComponent from "./components/sections/home/home.component";
import ResumeProductComponent from "./components/sections/resume-products/resume-product.component";

const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}>
                    </Route>
                </Routes>
                <Routes>
                    <Route path="/items" element={<ResumeProductComponent/>}>
                    </Route>
                </Routes>
                {/*<Routes>*/}
                {/*    <Route path="/redux" element={<CounterRedux/>}>*/}
                {/*    </Route>*/}
                {/*</Routes>*/}
                {/*<Routes>*/}
                {/*    <Route path="/axios" element={<CounterAxios/>}>*/}
                {/*    </Route>*/}
                {/*</Routes>*/}
            </BrowserRouter>

        </div>
    );
}

export default App;
