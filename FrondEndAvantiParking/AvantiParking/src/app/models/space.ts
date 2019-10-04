import {Zone} from '../models/zone';

export class Space{
    //public zona: Zone;
    constructor(
        public id_space: any,
        public name: string,
        public type: any,
        public state: any,
        public user: any,
        public zone: Zone
    ) {}
}