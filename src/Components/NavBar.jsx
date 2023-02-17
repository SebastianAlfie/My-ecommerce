import React from 'react'
import CartWidget from './CartWidget'
import { Button} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div className='div__nav'>
        <h1 className='brand'>My Ecommerce</h1>
        <ul className='lista'>
            <li className='listanav'>
            <Button className='boton__nav' colorScheme='red'>Pantalones</Button>
            <Button className='boton__nav' colorScheme='red'>Remeras</Button>
            <Button className='boton__nav' colorScheme='red'>Buzos</Button>
            <Button className='boton__nav' colorScheme='red'>Calzado</Button>
            </li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavBar