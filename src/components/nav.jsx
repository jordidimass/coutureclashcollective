"use client"
import React, { useEffect } from "react";
import Link from 'next/link'
import Cart from "./cart.jsx";
import { useRouter } from 'next/navigation';

import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem,Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./icons.jsx";

import {AcmeLogo} from "@/components/acmeLogo"
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default  function  Nav() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [carritoContador, setCarritoContador] = React.useState(0);

  const [open, setOpen] = React.useState(false); 
let router= useRouter()
let value =[]
  
  if (typeof window !== "undefined") {
   value = JSON.parse(localStorage.getItem("datos"))  || []
   
  
  }

  const togleMenu = () => {
    setIsMenuOpen(false);
    
    
    };
    const icons = {
      chevron: <ChevronDown fill="currentColor" size={16} />,
      scale: <Scale className="text-warning" fill="currentColor" size={30} />,
      lock: <Lock className="text-success" fill="currentColor" size={30} />,
      activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
      flash: <Flash className="text-primary" fill="currentColor" size={30} />,
      server: <Server className="text-success" fill="currentColor" size={30} />,
      user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };
  const menuItems = [
    "productos",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar  
    isMenuOpen={isMenuOpen}
 

    onMenuOpenChange={setIsMenuOpen} > 
      <NavbarContent>
        <NavbarMenuToggle
        
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
      
    
        />
 <Link href={"/"}   onClick={() => togleMenu()}>
        <NavbarBrand>
         
          <AcmeLogo />
          <p className="font-bold text-inherit">VOUGEO</p>
          
       
         
        </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" style={{fontSize:"13.7px"}} href="/productos">
            Productos
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
               
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                style={{fontSize:"13.7px"}}
                radius="sm"
                variant="light"
              >
                Marcas
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="heavyweight"
              description="Premium quality HeavyWeight products for athletes and fitness enthusiasts."
              startContent={icons.scale}
            >
              HeavyWeight
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      
      </NavbarContent>
      
     
     <NavbarMenu  >
        
        {menuItems.map((item, index) => (
        
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
                  onClick={() =>{   {console.log(item)} togleMenu() }}
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }

              className="w-full"
              href={"/"+item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <div className="ml-4 flow-root lg:ml-6" onClick={()=>{
        setOpen(true)

        
        }}>
                  <Link href={""} className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-white group-hover:text-white"
                      aria-hidden="true"
                    />
                  
                    
<span className="ml-2 text-sm font-medium text-white group-hover:text-white" > {carritoContador}</span>
                    
                      
               
                   
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
                <Cart setOpen={setOpen} open={open} setCarritoContador={setCarritoContador} carritoContador ={carritoContador}/>

    </Navbar>

  );
}
