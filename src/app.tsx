import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import UserList from "./pages/User/List/List";
import UserPage from "./pages/User/Page/Page";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <div className="wrapper">
            <Sidebar/>
            <main className="main">
                <Routes>
                    <Route index element={<Navigate to="/users" replace/>}/>
                    <Route path="users" element={<UserList/>}/>
                    <Route path="users/:userId" element={<UserPage/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;