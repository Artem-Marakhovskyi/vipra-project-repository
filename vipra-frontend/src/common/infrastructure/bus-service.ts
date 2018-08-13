import { Injectable, EventEmitter } from "@angular/core";
import { Pingable } from "./pingable";

[Injectable]
export class BusService {

    private entryStorage : Array<BusEntry> = [];

    public call(id : string) {
        console.log(this.entryStorage.length);
        let entry = this.findEntry(id);
        if (entry !== null) {
            entry.emitter.next(entry.pingable);
        }
    }

    public register(obj : Pingable, entryId : string) {
        let entry : BusEntry = this.getOrCreateEntry(entryId, obj);
        entry.emitter.subscribe(obj.ping);
    }

    private getOrCreateEntry(id : string, pingable : Pingable) : BusEntry{
        for(let i=0; i<this.entryStorage.length;i++) {
            if (this.entryStorage[i].id == id) {
                return this.entryStorage[i];
            }
        }

        let entry = {
            id : id,
            emitter : new EventEmitter<any>(false),
            pingable : pingable
        };
        this.entryStorage.push(entry);

        return entry;
    }

    private findEntry(id : string) : BusEntry {
        for (let i =0; i < this.entryStorage.length; i++){
            if (this.entryStorage[i].id === id) {
                return this.entryStorage[i];
            }
        }

        return null;
    }
}


export interface BusEntry {
    id : string;
    emitter : EventEmitter<any>;
    pingable : Pingable;
}