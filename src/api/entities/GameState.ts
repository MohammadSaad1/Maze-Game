import { State } from "../generics/State";
import { StateResult } from "../generics/StateResult";

export interface GameState {
    state: State,
    "state-result": StateResult
}