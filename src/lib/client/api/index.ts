import { Client } from "appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_BASE_URL!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setLocale("en-US");

export { ID } from "appwrite";
export { Databases } from "appwrite";
