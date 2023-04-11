import { OpenAiService } from "./openai/openai.service";
import { CreateCompletionRequestBody } from "./openai/models/request/createCompletionRequestBody";

enum PromptType {
  travelGuide,
  recruiter,
  movieCritic,
  techReviewer,
  socialMediaManager,
}

export async function run(input: string, type: PromptType) {
  const request: CreateCompletionRequestBody = {
    model: "text-davinci-003",
    prompt: mergeInputWithPrompt(input, type),
    temperature: 0.8,
    top_p: 0.5,
    max_tokens: 250,
    n: 5,
  };

  try {
    const response = await OpenAiService.createCompletion(request);

    return response?.choices.map((choice) => choice.text);
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

function mergeInputWithPrompt(input: string, type: PromptType): string {
  let result = input;

  switch (type) {
    case PromptType.travelGuide:
      result = `I want you to act as a travel guide. I will write you my location and you will suggest a place to visit near my location. In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location. My first suggestion request is to write a blog post from the message "${input}"`;
      break;
    case PromptType.recruiter:
      result = `I want you to act as a recruiter. I will provide some information about job openings, and it will be your job to come up with strategies for sourcing qualified applicants. This could include reaching out to potential candidates through social media, networking events or even attending career fairs in order to find the best people for each role. My first request is to write a blog post from the message "${input}”`;
      break;
    case PromptType.movieCritic:
      result = `I want you to act as a movie critic. You will develop an engaging and creative movie review. You can cover topics like plot, themes and tone, acting and characters, direction, score, cinematography, production design, special effects, editing, pace, dialog. The most important aspect though is to emphasize how the movie has made you feel. What has really resonated with you. You can also be critical about the movie. Please avoid spoilers. My first request is to write a blog post from the message "${input}"`;
      break;
    case PromptType.techReviewer:
      result = `I want you to act as a tech reviewer. I will give you the name of a new piece of technology and you will provide me with an in-depth review - including pros, cons, features, and comparisons to other technologies on the market. My first request is to write a blog post from the message "${input}".`;
      break;
    case PromptType.socialMediaManager:
      result = `I want you to act as a social media manager. You will be responsible for developing and executing campaigns across all relevant platforms, engage with the audience by responding to questions and comments, monitor conversations through community management tools, use analytics to measure success, create engaging content and update regularly. My first request is to write a blog post from the message "${input}"`;
      break;
  }

  return result;
}

run("the prompt inserted by the user goes here", PromptType.movieCritic);
