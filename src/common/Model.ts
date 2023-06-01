import {EventType} from "./EventBus";


export interface ConfigModel {
    hostname:string
    port:number
}

class ConfigLoadedEvent implements EventType<ConfigModel> {
    get = (json: string) => <ConfigModel> {} ;
    name: string = "ConfigLoadedEvent";
}


export interface OrderModel {
    orderId:string
}

class OrderLoadedEvent implements EventType<OrderModel> {
    get = (json: string) => <OrderModel> {} ;
    name: string = "ConfigLoadedEvent";
}

const CONFIG_LOADED_EVENT = new ConfigLoadedEvent();
const ORDER_LOADED_EVENT = new OrderLoadedEvent();

export {CONFIG_LOADED_EVENT, ORDER_LOADED_EVENT}

