import type { Fields } from "./Fields";

export class Record {
  fields: Fields;
  id?: string;
  createdAt?: Date;
  

  constructor(fields: Fields,id?: string, createdAt?: Date) {
    this.fields = fields;
    this.id = id;
    this.createdAt = createdAt;
  }
}
