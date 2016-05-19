import {Bread} from "../abstract/Bread";

export class OriginalBread extends Bread {
    constructor() {
        super();
        console.log('Making Bread');
    }
}