export interface Attribute {
  attributes: {
    user_name: string;
    user_id: string;
    attributes: {
      department: string;
      access_level: string;
    }
  }[];
}
