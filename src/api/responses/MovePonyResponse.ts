import { State } from "../generics/State";
import { StateResult } from "../generics/StateResult";

export interface MovePonyResponse {
    state: State,
    "state-result": StateResult
  }