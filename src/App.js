import { Routers } from './Routers';
import { useRef } from "react";

import Header from './Layout/Header'
import Footer from "./Layout/Footer";

import { ToastContainer } from "react-toastify";



function App() {
    
    const parentDiv = useRef()
    function ToggleDarkMode(){
        if(localStorage.getItem('mode')){
            parentDiv.current.classList.remove('dark')
            localStorage.setItem('mode', '')
        }else{
            parentDiv.current.classList.add('dark')
            localStorage.setItem('mode','dark')
        }
    }

    return (
        <div ref={parentDiv} className={localStorage.getItem('mode')}>
            <div className="App">
                <Header ToggleDarkMode={ToggleDarkMode} />

                <Routers     />

                <Footer />
            </div>

            <ToastContainer autoClose={2500} limit={5} draggablePercent={60} />

        </div>
    );
}

export default App;
