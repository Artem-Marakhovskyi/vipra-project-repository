import { PingContext } from "./bus-service";

export interface Pingable {
    ping(obj : PingContext);
}