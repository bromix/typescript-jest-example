export interface IListener {
    name: string; // should be unique name per listener
    priority?:  ListenerPriority; // optional, NORMAL should be used if this is empty
    onNotify: (event: IEvent) => void;
}

export interface IEvent {
    data: any; // not known type?
    type: EventType;
}

export enum ListenerPriority {
    LOW,
    NORMAL,
    HIGH,
}

export enum EventType {
    CLICK,
    PAUSE,
}