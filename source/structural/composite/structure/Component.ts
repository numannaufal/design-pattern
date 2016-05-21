export interface Component {
    operation(): void;
    add(component: Component): void;
    remove(component: Component): void;
    getChild(i: number): Component;
    iterator(): void;
}