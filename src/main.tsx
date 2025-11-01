import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import BaseLayout from "@/components/layout/BaseLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import RegisterPage from "@/pages/RegisterPage.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLayout/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    {/*<Route path={'dashboard'} element={<Dashboard/>}>*/}
                    {/*    <Route index element={<ProfilePage/>}/>*/}
                    {/*    <Route path={'playing'} element={<PlayingPage/>}/>*/}
                    {/*    <Route path={'training'} element={<TrainingPage/>}/>*/}
                    {/*    <Route path={'range'} element={<RangePage/>}/>*/}
                    {/*    <Route path={'profile'} element={<ProfilePage/>}/>*/}
                    {/*</Route>*/}
                    <Route path={'*'} element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
