import { ChoiceElement } from "../elements/choiceElement";
import { UsageElement } from "../elements/usageElement";

export interface CreateCompletionResponse {
  id: string;
  object: string;
  created: Number;
  model: string;
  choices: ChoiceElement[];
  usage: UsageElement;
}
