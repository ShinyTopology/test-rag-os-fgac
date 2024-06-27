import { format } from "date-fns";
import { UnicornUser, UnicornAttributes, CognitoAttributes, CognitoUser } from "./types";

export function getDateTime(date: string): string {
  return format(new Date(date), "MMMM d, yyyy - H:mm");
}

// Transform cognito format to Unicorn format
export function convertCognitoToUnicorn(cognitoUser: CognitoUser): UnicornUser {
  const unicornUser: UnicornUser = {
    username: cognitoUser.username,
    attributes: {},
  };

  cognitoUser.attributes.forEach(attr => {
    unicornUser.attributes[attr.Name] = attr.Value;
  });

  return unicornUser;
}

// Transform cognito format to Unicorn format
export function convertUnicornToCognito(unicornUser: UnicornUser): CognitoUser {
  const cognitoUser: CognitoUser = {
    username: unicornUser.username,
    attributes: {},
  };

  unicornUser.attributes.forEach(attr => {
    cognitoUser.attributes[attr.Name] = attr.Value;
  });

  return cognitoUser;
}

export const departmentList : string[] = [
  "engineering",
  "research",
  "hr"
]

export const accessLevelList : string[] = [
  "restricted",
  "internal",
  "public",
]