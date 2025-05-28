import { Client } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67f59f95000e16ec053f");

export { ID } from "appwrite";
export { Databases } from "appwrite";
