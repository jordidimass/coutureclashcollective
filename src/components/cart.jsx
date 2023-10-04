import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Snipet from './snipet'
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]
let dato = 0
export default function Cart({setOpen,open,setCarritoContador,carritoContador}) {
  const [productos, setProductos] = useState(false)
  const [valor,setValor] =useState([])
  let router = useRouter()
  let value =[]

  let value2 =0
  let value3 =0


  if (typeof window !== "undefined") {

   value = JSON.parse(localStorage.getItem("datos"))  || []
   value2 = localStorage.getItem("costo") 

  setCarritoContador(value.length)
  }
  function eliminar (event){
    const resultado = JSON.parse(localStorage.getItem("datos")).filter(animal => animal.idCart != parseInt(event.target.id));
    localStorage.setItem("datos",JSON.stringify(resultado))

    JSON.parse(localStorage.getItem("datos")).map(function(ll){
      value3=ll.productss.price + value3
      
    })

      localStorage.setItem("costo",value3)

    router.refresh()
  
  
  
  }


 return (


    <Transition.Root show={open} as={Fragment}>
      
      <Dialog as="div"  className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
         
        >
          

          <div className="fixed inset-0 bg-black-500 bg-opacity-75 transition-opacity fondo"  />
        </Transition.Child>
       
        <div className="fixed inset-0 overflow-hidden  " >
          <div className="absolute inset-0 overflow-hidden "  >
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 "  >
              <Transition.Child
                as={Fragment}
                
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >

                <Dialog.Panel className="pointer-events-auto  w-screen max-w-md"style={{marginTop:"64px"}} >
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl" >
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-red-400 hover:text-gray-500"
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
 {(productos == false)?<div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {value.map((product) => (
                              <li key={product.idCart} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.productss.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.productss.href}>{product.productss.name}</a>
                                      </h3>
                                      <p className="ml-4">{"Q"+product.productss.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.productss.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">

                                    <div className="flex">
                                      <Link
                                      id={product.idCart}
                                      href={""}
                                      onClick={eliminar}
                                        className="font-medium text-black hover:text-red-500"
                                      >
                                        Remove
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>:<Snipet/>}
                      
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                    
                       <p>{"Q"+value2}</p>
                      
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                           
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
