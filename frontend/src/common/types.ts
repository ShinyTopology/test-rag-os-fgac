interface UnicornAttributes {
  name: string;
  value: string;
}

interface UnicornUser {
  username: string;
  attributes: UnicornAttributes[];
}

interface CognitoAttributes {
  [key: string]: string;
}

interface CognitoUser {
  username: string;
  attributes: CognitoAttributes;
}