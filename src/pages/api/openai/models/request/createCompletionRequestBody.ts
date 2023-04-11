export interface CreateCompletionRequestBody {
  model: string;
  prompt?: string;
  max_tokens?: Number;
  temperature?: Number;
  top_p?: Number;
}
