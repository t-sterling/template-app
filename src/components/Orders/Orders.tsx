import {Button, Card, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {ORDER_LOADED_EVENT, OrderModel} from '../../common/Model'
import eventBus from "../../common/EventBus";

export const Orders = () => {

    const [orders, setConfig] = useState<OrderModel>({orderId: "123"})

    useEffect(() => {

        eventBus.subscribeTo(ORDER_LOADED_EVENT, (data:OrderModel) => setConfig(data));

        // empty [] here means it runs only once
    }, []);

    return <Container>

        <Card>
            <Card.Title>Orders</Card.Title>
            <Card.Body>This is where the orders would go</Card.Body>
        </Card>

    </Container>

}
