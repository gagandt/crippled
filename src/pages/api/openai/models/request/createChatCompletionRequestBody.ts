import { MessageElement } from "../elements/messageElement";

export interface CreateChatCompletionRequestBody {
  model: string;
  messages: MessageElement[];

  // Configuration
  max_tokens?: Number;
  temperature?: Number;
  top_p?: Number;
  n?: Number;
}
