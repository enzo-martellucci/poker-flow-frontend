import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import HomePage from '@/pages/HomePage.tsx'
import LoginPage from '@/pages/LoginPage.tsx'
import RegisterPage from '@/pages/RegisterPage.tsx'
import ErrorPage from '@/pages/ErrorPage.tsx'
import ActionPage from '@/pages/ActionPage.tsx'
import RangePage from '@/pages/RangePage.tsx'
import DashboardTemplate from '@/shared/ui/templates/DashboardTemplate.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'login'} element={<LoginPage />} />
                <Route path={'register'} element={<RegisterPage />} />
                <Route path={'dashboard'} element={<DashboardTemplate />}>
                    <Route index element={<Navigate to={'actions'} replace />} />
                    <Route path={'actions'} element={<ActionPage />} />
                    <Route path={'ranges'} element={<RangePage />} />
                    {/*<Route index element={<ProfilePage/>}/>*/}
                    {/*<Route path={'playing'} element={<PlayingPage/>}/>*/}
                    {/*<Route path={'training'} element={<TrainingPage/>}/>*/}
                    {/*<Route path={'range'} element={<RangePage/>}/>*/}
                    {/*<Route path={'profile'} element={<ProfilePage/>}/>*/}
                    <Route path={'*'} element={<ErrorPage />} />
                </Route>
                <Route path={'*'} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
