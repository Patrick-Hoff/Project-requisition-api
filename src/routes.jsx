import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Index"

import Clima from "./pages/Clima/Index"
import Conversao from "./pages/Conversao/Index"
import Jornal from "./pages/Jornal/Index";
import Home from "./pages/Home/Index"

import Error from "./pages/Error/Index"

function View() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="clima" element={<Clima />} />
                <Route path="conversao" element={<Conversao />} />
                <Route path="jornal" element={<Jornal />} />

                <Route path="*" element={<Error />}/>

            </Routes>
        </BrowserRouter>
    )
}

export default View