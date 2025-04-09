import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67f59f95000e16ec053f");

export const account = new Account(client);
export { ID } from "appwrite";
