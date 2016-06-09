import {Mediator} from "./Mediator";

export interface Colleague {
    mediator: Mediator;
    action(): void;
}