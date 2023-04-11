export enum RoleType {
  USER = "user",
  SYSTEM = "system",
  ASSISTANT = "assistant",
}

export interface MessageElement {
  role: RoleType;
  content: string;
}
