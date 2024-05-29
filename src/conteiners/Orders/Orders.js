import classes from './Orders.module.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import Order from '../../components/Order/Order'

function Orders(){
    const orders = useSelector(state=> state.orders.orders)
    const productsList = useSelector((state) => state.products.products)
    let navigate = useNavigate()
    const handleButtonClick = (redirect) => {
        navigate(redirect)
    }


    const renderOrdersList = () => {
        console.log(orders);
        
        if (!orders) {
            return (
                <div>
                    <p>У Вас пока нет заказов</p>
                    <Button onClick={() => handleButtonClick('/cart')} value='Корзина'/>
                    <Button onClick={() => handleButtonClick('/counter')} value='Магазин'/>
                </div>
            );
        }
    
        // Отображаем каждый заказ с помощью компонента Order
        return (
          <div>
            {orders.map((order, index) => (
              <Order key={index} orderData={order} orderIndex={index} productList={productsList} />
            ))}
          </div>
        );
    };


    return(
         <div className={classes.Orders}>
            <div className={classes.OrdersHeader}>Ваши заказы</div>
            {renderOrdersList()}
        </div>
    )
}

export default Orders