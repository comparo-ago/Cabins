import { React } from "react";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Button from '@material-ui/core/Button'

function CartWidget(){
    return(
        <Button>
<ShoppingCartOutlinedIcon style={{ fontSize: 40 }} />
</Button>
)}
export default CartWidget;