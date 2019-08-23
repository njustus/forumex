// @ts-ignore
import * as yaml_config from "node-yaml-config";

export class Config {
  public readonly config: any;
  constructor(private readonly url: string) {
    this.config = yaml_config.load(url);
  }
  public mongoAddress(): string {
    return `mongodb://${this.config.mongodb.host}:${this.config.mongodb.port}/${this.config.mongodb.db}`;
  }
}

export const defaultUrl = "forumex.yml";
const config = new Config(defaultUrl);
export default config;
