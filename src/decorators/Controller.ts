import "reflect-metadata";

export function ControllerDocs(prefix: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata("prefix", prefix, target);
    if (!Reflect.hasMetadata("routes", target)) {
      Reflect.defineMetadata("routes", [], target);
    }
  };
}
