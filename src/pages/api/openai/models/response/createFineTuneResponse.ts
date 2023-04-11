import { EventElement } from "../elements/eventElement";
import { FileElement } from "../elements/fileElement";
import { HyperparamsElement } from "../elements/hyperparamsElement";

export interface createFineTuneResponse {
  id: string;
  object: string;
  model: string;
  created_at: Number;
  events: EventElement[];
  fine_tuned_model: string;
  hyperparams: HyperparamsElement;
  organization_id: string;
  result_files: FileElement[];
  status: string;
  validation_files: FileElement[];
  training_files: FileElement[];
  updated_at: Number;
}
