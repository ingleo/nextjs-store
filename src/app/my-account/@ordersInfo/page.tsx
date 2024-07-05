import { getCustomerOrders } from 'app/services/shopify/graphql/customer';

export default async function OrdersInfoPage() {
  const ordersInfo = await getCustomerOrders();

  return (
    <div>
      <section>
        <h3>Orders</h3>
        {ordersInfo.orders?.map((order) => (
          <p key={order.orderNumber}>{order.orderNumber}</p>
        ))}
      </section>
    </div>
  );
}
