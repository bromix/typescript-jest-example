import { EventBus } from "../src/EventBus";
import { EventType, IEvent, IListener } from "../src/interfaces";

describe("Test subscribing new listener", () => {
    const clickListener: IListener = {
        name: "click",
        onNotify: () => {},
    }
    it("should return true for successfull", () => {
        const eventBus = new EventBus();
        expect(eventBus.subscribe(clickListener)).toBeTruthy();
    });

    it("should return false when adding existing listener", () => {
        const eventBus = new EventBus();
        const clickListener2: IListener = {
            name: "click",
            onNotify: () => {},
        };
        expect(eventBus.subscribe(clickListener)).toBeTruthy();
        expect(eventBus.subscribe(clickListener2)).toBeFalsy();
    });
});

describe("Test triggering listener handler methods", () => {
    let handlerTriggerCount = 0;  // hacky way but it might work
    const clickListener: IListener = {
        name: "click",
        onNotify: (event: IEvent) => {
            handlerTriggerCount++;
            console.log("Triggered click with event", event);
        },
    };
    const pauseListener: IListener = {
        name: "pause",
        onNotify: (event: IEvent) => {
            handlerTriggerCount++;
            console.log("Triggered pause with event", event);
        },
    };
    const eventBus = new EventBus();
    eventBus.subscribe(clickListener);
    eventBus.subscribe(pauseListener);

    it("should trigger all listeners", () => {
        const clickEvent: IEvent = {
            data: "some random data",
            type: EventType.CLICK,
        };
        const pauseEvent: IEvent = {
            data: "some random data",
            type: EventType.PAUSE,
        };
        eventBus.triggerEvent(clickEvent);
        expect(handlerTriggerCount).toBe(2); // event should trigger 2 subscribed events

        eventBus.triggerEvent(pauseEvent);
        expect(handlerTriggerCount).toBe(4); // event should trigger 2 subscribed events
    });

});
