
type Observer = (t:any) => void;

export interface EventType<PAYLOAD> {

    get:(json:string) => PAYLOAD

    name:string

}

export class EventBus {

    private observers: Map<string, Observer[]>;

    constructor() {
        this.observers = new Map<string, Observer[]>();
    }

    public subscribeTo = <T>(eventType:EventType<T>, observer:Observer) => {
        if(!this.observers.has(eventType.name)){
            this.observers.set(eventType.name, []);
        }
        this.observers.get(eventType.name)?.push(observer);
    }

    public publish= <T>(eventType:EventType<T>, t:T)  => {
        this.observers.get(eventType.name)?.forEach(obs => obs(t))
    }

}

const eventBus = new EventBus();
export default eventBus;