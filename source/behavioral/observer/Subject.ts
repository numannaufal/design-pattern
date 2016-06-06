import {Observer} from "./Observer";

export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
    setState(state: string): void;
}