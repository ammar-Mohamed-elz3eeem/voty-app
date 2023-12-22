import { DefaultUser, Profile, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export type PollInitialState = {
  errors?: {
    subject?: string[] | undefined;
    options?: string[] | undefined;
  };
  message?: string | undefined;
};

type Votes = {
  id: string;
  userId: string;
  PollId: string;
  optionId: string;
};

type Poll = {
  subject: string;
  id: string;
};

type Options = {
  id?: string;
  name?: string;
  pollId?: string;
};

export type PollType = {
  options?: Options[];
  Votes?: Votes[];
  creator?: User;
} & Poll;

export type UserInitialState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    dob?: string[];
    confirm_password?: string[];
  };
  message?: string | null;
};

export interface UserWithRole extends User {
  role?: string;
}

export type JWTCallbackParams = {
  token: JWT;
  user: UserWithRole;
  profile?: Profile;
  session?: any;
  trigger?: "signIn" | "signUp" | "update";
  isNewUser?: boolean;
};

export type LoginInitialState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export type INewUser = {
  username: string;
  password: string;
  email: string;
  confirm_password: string;
  dob: Date;
};
