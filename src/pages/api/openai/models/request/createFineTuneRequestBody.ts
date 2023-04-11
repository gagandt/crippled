export interface CreateFineTuneRequestBody {
  /**
   * The ID of an uploaded file that contains training data.
   * See upload file for how to upload a file.
   * Your dataset must be formatted as a JSONL file, where each training example is a JSON object with the keys "prompt" and "completion". Additionally, you must upload your file with the purpose fine-tune.
   * See the fine-tuning guide for more details.
   */
  training_file: string;

  /**
   * The ID of an uploaded file that contains validation data.
   * If you provide this file, the data is used to generate validation metrics periodically during fine-tuning. These metrics can be viewed in the fine-tuning results file. Your train and validation data should be mutually exclusive.
   * Your dataset must be formatted as a JSONL file, where each validation example is a JSON object with the keys "prompt" and "completion". Additionally, you must upload your file with the purpose fine-tune.
   * See the fine-tuning guide for more details.
   */
  validation_file?: string;

  /**
   * The name of the base model to fine-tune. You can select one of "ada", "babbage", "curie", "davinci", or a fine-tuned model created after 2022-04-21. To learn more about these models, see the Models documentation.
   */
  model?: string;

  /**
   * The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
   */
  n_epochs?: Number;

  /**
   * The batch size to use for training. The batch size is the number of training examples used to train a single forward and backward pass.
   * By default, the batch size will be dynamically configured to be ~0.2% of the number of examples in the training set, capped at 256 - in general, we've found that larger batch sizes tend to work better for larger datasets.
   */
  batch_size?: Number;

  /**
   * The learning rate multiplier to use for training. The fine-tuning learning rate is the original learning rate used for pretraining multiplied by this value.
   * By default, the learning rate multiplier is the 0.05, 0.1, or 0.2 depending on final batch_size (larger learning rates tend to perform better with larger batch sizes). We recommend experimenting with values in the range 0.02 to 0.2 to see what produces the best results.
   */
  learning_rate_multiplier?: Number;

  /**
   * The weight to use for loss on the prompt tokens. This controls how much the model tries to learn to generate the prompt (as compared to the completion which always has a weight of 1.0), and can add a stabilizing effect to training when completions are short.
   * If prompts are extremely long (relative to completions), it may make sense to reduce this weight so as to avoid over-prioritizing learning the prompt.
   */
  prompt_loss_weight?: Number;
}
