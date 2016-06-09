import {Aggregate} from "./Aggregate";

export interface Iterator {
    first(): Aggregate;
    next(): Aggregate;
    isDone(): boolean;
    currentItem(): Aggregate;
}