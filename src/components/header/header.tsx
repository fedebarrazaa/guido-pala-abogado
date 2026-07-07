"use client";
import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton,  MobileNavHeader, MobileNavToggle, MobileNavMenu} 
from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { FaInstagram, FaLinkedin  } from "react-icons/fa";
import { Link } from "react-router-dom";



export function Header() {
  const navItems = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Sobre mi",
      link: "/sobre-mi",
    },
    {
      name: "Areas",
      link: "/areas",
    },
    {
      name: "Contacto",
      link: "/contacto",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="bg-trasparent/100 backdrop-blur-md rounded-full shadow-lg"> 
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">
               <a href="https://www.instagram.com/guidopabogado/"> 
                <FaInstagram fontSize='20px' color="white"/> 
                </a> 
            </NavbarButton>
            <NavbarButton variant="secondary"> {/* EX primary */}
                <a href="https://www.linkedin.com/in/guido-palacin/"> 
                <FaLinkedin fontSize='20px' color="white"/> 
                </a> 

            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="bg-transparent/100 backdrop-blur-md rounded-full shadow-lg">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative px-4 py-2 text-black hover:text-gray-200"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
      {/*    <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                <a href="https://www.instagram.com/guidopabogado/"> 
                <FaInstagram fontSize='20px' /> Instagram
                </a> 
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>*/}  
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      

      {/* Navbar */}
    </div>
  );
}
