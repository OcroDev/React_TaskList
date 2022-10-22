import { ROLES } from "./roles.enum";

export class User {
  userName = "";
  userEmail = "";
  password = "";
  role = ROLES.USER;

  constructor(userName, userEmail, password, role) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.password = password;
    this.role = role;
  }
}
