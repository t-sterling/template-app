import {Card, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {CONFIG_LOADED_EVENT, ConfigModel} from '../../common/Model'
import eventBus from "../../common/EventBus";

export const Config = () => {

    const [config, setConfig] = useState<ConfigModel>({hostname: "localhost", port: 1234})

    useEffect(() => {

        eventBus.subscribeTo(CONFIG_LOADED_EVENT, (data:ConfigModel) => setConfig(data));

        // empty [] here means it runs only once
    }, []);

    return <Container>

        <Card>
            <Card.Title>Config</Card.Title>
            <Card.Body>This is where the config would go</Card.Body>
        </Card>

    </Container>

}
