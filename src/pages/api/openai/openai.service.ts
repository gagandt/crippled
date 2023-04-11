import axios from "axios";
import { CreateCompletionRequestBody } from "./models/request/createCompletionRequestBody";
import { CreateFineTuneRequestBody } from "./models/request/createFineTuneRequestBody";
import { UploadFileRequestBody } from "./models/request/uploadFileRequestBody";
import { CreateCompletionResponse } from "./models/response/createCompletionResponse";

export class OpenAiService {
  private static DOMAIN = "https://api.openai.com/v1";

  public static async createCompletion(
    body: CreateCompletionRequestBody
  ): Promise<CreateCompletionResponse> {
    const result = await axios({
      method: "post",
      url: `${this.DOMAIN}/completions`,
      data: body,
      headers: this.getHeaders({
        "Content-Type": "application/json",
      }),
    });

    return result.data as CreateCompletionResponse;
  }

  public static async uploadFile(
    body: UploadFileRequestBody
  ): Promise<CreateCompletionResponse> {
    const result = await axios({
      method: "post",
      url: `${this.DOMAIN}/files`,
      data: body,
      headers: this.getHeaders({
        "Content-Type": "multipart/form-data",
      }),
    });

    return result.data as CreateCompletionResponse;
  }

  public static async createFineTune(
    body: CreateFineTuneRequestBody
  ): Promise<any> {
    const result = await axios({
      method: "post",
      url: `${this.DOMAIN}/fine-tunes`,
      data: body,
      headers: this.getHeaders({
        "Content-Type": "application/json",
      }),
    });

    return result.data;
  }

  public static async retrieveFineTune(id: string): Promise<any> {
    const result = await axios({
      method: "get",
      url: `${this.DOMAIN}/fine-tunes/${id}`,
      headers: this.getHeaders(),
    });

    return result.data;
  }

  private static getHeaders(customHeaders?: any): any {
    return {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      ...customHeaders,
    };
  }
}
