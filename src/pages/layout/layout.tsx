import { Header } from '../../components/header/header'
import { FooterDesing } from '../../components/footer/footer'
import { Outlet } from "react-router-dom";


export function Layout(){
    return (
        <> 
        <Header /> 
        <main>
            <Outlet />
        </main>
        <FooterDesing />
        </>
    )
}