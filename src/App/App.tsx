import React from 'react';
import 'App/App.css';
import AppHeader from "App/AppBar";
import {CarsList} from "components/CarsList";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <CarsList />
        </div>
    );
}

export default App;
