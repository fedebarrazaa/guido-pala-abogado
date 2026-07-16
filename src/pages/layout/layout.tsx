import { Header } from '../../components/header/header'
import { FooterDesing } from '../../components/footer/footer'
import { Outlet } from "react-router-dom";
import {FloatingWhatsApp} from '../../components/whatsApp/whatapp'

export function Layout(){
    return (
        <> 
        <Header /> 
        <main>
            <Outlet />
            <FloatingWhatsApp />
        </main>
        <FooterDesing />
        </>
    )
}