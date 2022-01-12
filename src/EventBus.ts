import { IEvent, IListener, ListenerPriority } from "./interfaces";

interface IEventBusState {
    listeners: {[name: string]: IListener};
    listenerByPriority: Map<ListenerPriority, IListener[]>;
}

export class EventBus {
    state: IEventBusState = {
        listeners: {},
        listenerByPriority: new Map(),
    };

    private validateListener = (listener: IListener): boolean => {
        const {
            state,
        } = this;

        // check if listener already exists
        const existingListener = state.listeners[listener.name];
        if (existingListener) {
            console.error(`Listener ${existingListener.name} already exists!!!`);
            return false;
        }

        return true;
    };

    private updateListeners = (listeners: IListener[]): boolean => {
        // listeners by name
        this.state.listeners = {};
        listeners.forEach(listener => this.state.listeners[listener.name] = listener);

        // listeners by priority
        const highPriorityListeners = Object.values(listeners)
            .filter(listener => listener.priority === ListenerPriority.HIGH);
        const normalPriorityListeners = Object.values(listeners)
            .filter(listener => 
                !!listener.priority == false ||  listener.priority === ListenerPriority.NORMAL);
        const lowPriorityListeners = Object.values(listeners)
            .filter(listener => listener.priority === ListenerPriority.LOW);

        this.state.listenerByPriority.set(ListenerPriority.HIGH, highPriorityListeners);
        this.state.listenerByPriority.set(ListenerPriority.NORMAL, normalPriorityListeners);
        this.state.listenerByPriority.set(ListenerPriority.LOW, lowPriorityListeners);

        console.info("State update, new state", this.state);

        return true;
    };

    /**
     * @returns true if the listener is sucessfully subscibed, otherwise false
     * @param listener with type of IListener
     */
    subscribe = (listener: IListener): boolean => {
        if (!this.validateListener(listener)) {
            return false;
        }

        const { 
            listeners,
         } = this.state;
        return this.updateListeners([...Object.values(listeners), listener]);
    };

    /**
     * @returns true if the listener is sucessfully unsubscibed, otherwise false
     * @param listener with type of IListener
     */
    unsubscribe = (listener: IListener): boolean => {
        if (!this.validateListener(listener)) {
            return false;
        }

        const {
            listeners,
        } = this.state;
        const newListeners = {...listeners};
        delete newListeners[listener.name];
        return this.updateListeners(Object.values(newListeners));
    };

    unsubscribeAll = (): boolean => {
        return this.updateListeners([]);
    };

    triggerEvent = (event: IEvent): boolean => {
        const {
            listenerByPriority,
        } = this.state;

        listenerByPriority.get(ListenerPriority.HIGH)?.forEach(listener => listener.onNotify(event));
        listenerByPriority.get(ListenerPriority.NORMAL)?.forEach(listener => listener.onNotify(event));
        listenerByPriority.get(ListenerPriority.LOW)?.forEach(listener => listener.onNotify(event));

        return false;
    }
}