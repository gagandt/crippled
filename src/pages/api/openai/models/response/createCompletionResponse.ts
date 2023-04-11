import { CompletionChoiceElement } from "../elements/completionChoiceElement";
import { UsageElement } from "../elements/usageElement";

export interface CreateCompletionResponse {
  id: string;
  object: string;
  created: Number;
  model: string;
  choices: CompletionChoiceElement[];
  usage: UsageElement;
}
