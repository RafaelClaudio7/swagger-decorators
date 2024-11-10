import { DefaultTypes } from "./DefaultTypes";
import { Formats } from "./Formats";

type Schema = {
  type: DefaultTypes;
  properties?: Record<string, Schema>;
  items?: Schema;
  example?: any;
  required?: string[];
  enum?: any[];
  $ref?: string;
  format?: Formats;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
};

export { Schema };
