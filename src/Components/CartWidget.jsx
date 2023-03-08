import { Flex } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({}) => {
  return (
    <>       
    <Flex>
            <i><FontAwesomeIcon icon={faCartShopping} color="#fff" fontSize={35} /></i>
            <p className="cantidad_items">{1}</p>
    </Flex>
    </>
  )
}

export default CartWidget