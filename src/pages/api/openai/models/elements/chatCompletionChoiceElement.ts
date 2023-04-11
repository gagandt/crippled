import { ChoiceElement } from "./choiceElement";
import { MessageElement } from "./messageElement";

export interface ChatCompletionChoiceElement extends ChoiceElement {
  message: MessageElement;
}
