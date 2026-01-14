const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

function processOrder(order) {
    // Simular diferentes etapas del pedido

    // Etapa 1:
    setTimeout(() => {
        order.status = 'Preparando';
        updateOrderStatus(order, order.status);
    }, 1000);

    // Etapa 2:
    setTimeout(() => {
        order.status = '¡Completado!';
        updateOrderStatus(order, order.status);
    }, 3000);
}