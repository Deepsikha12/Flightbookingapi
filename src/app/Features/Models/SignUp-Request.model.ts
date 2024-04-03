export enum Role {
  // Define your role enums here
  User,
  Admin
}

export class UserDetails {
  id!: number;
  email!: string;
  age!: number;
  password!: string;
  role!: Role;
}
