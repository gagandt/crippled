import { ChatCompletionChoiceElement } from "../elements/chatCompletionChoiceElement";
import { UsageElement } from "../elements/usageElement";

export interface CreateChatCompletionResponse {
  id: string;
  object: string;
  created: Number;
  model: string;
  choices: ChatCompletionChoiceElement[];
  usage: UsageElement;
}
