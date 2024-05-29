import classes from "./Order.module.css";

function Order({ orderData, orderIndex, productList }) {
    // Подсчет общей суммы заказа перед рендерингом
    let sum = Object.keys(orderData.order).reduce((acc, productId) => {
        // Убеждаемся, что для productId есть цена и количество
        const price = orderData.order[productId].price || 0;
        const quantity = orderData.order[productId].quantityProd || 0;

        // К общей сумме добавляем произведение цены на количество
        return acc + (price * quantity);
    }, 0);

    return (
        <div className={classes.Order}>
            <p>Номер заказа: {orderIndex + 1}</p>
            <p>Дата заказа: {orderData.date}</p>
            <table>
                <thead>
                    <tr>
                        <th>Название товара</th>
                        <th>Количество товара</th>
                        <th>Стоимость за ед.</th>
                        <th>Всего</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(orderData.order).map((productId, idx) => (
                        <tr key={idx}>
                            <td>{productList[productId].name}</td>
                            <td>{orderData.order[productId].quantityProd}</td>
                            <td>{orderData.order[productId].price}</td>
                            <td>{orderData.order[productId].price * orderData.order[productId].quantityProd}</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Итого:</td>
                        <td>{sum}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Order;
