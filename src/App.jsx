import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import BoxSearchComponent from "./components/box-search/box-search.component";

const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BoxSearchComponent/>}>
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
