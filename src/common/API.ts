import eventBus, {EventType} from "./EventBus";
import {CONFIG_LOADED_EVENT} from "./Model";

// TODO: explore axios / post etc

class API {

    private get = <T>(url:string, eventType: EventType<T>) => {

        window.fetch(url)
              .then(res => {
                  return res.json();
              })
              .then(json => {
                  eventBus.publish(eventType, eventType.get(json))
              })
              .catch(e => {
                 console.error(e);
              });

    }

    loadConfig = () => this.get("api/config", CONFIG_LOADED_EVENT);

}