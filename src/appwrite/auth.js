import conf from "../conf/conf";
import { Client, ID, Account } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.url).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Error in :: createAccount :: method of  file", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const login = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return login;
    } catch (error) {
      console.log("Error in :: login :: method of auth.js file", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const currentUser = this.account.get();
      if (currentUser) {
        return currentUser;
      } else {
        return null;
      }
    } catch (error) {
      console.log(
        "Error in :: getCUrrentUser :: method of auth.js file",
        error
      );
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Error in :: logout :: method of auth.js file", error);
      throw error;
    }
  }

  googleAuth(success, failed) {
    try {
      this.account.createOAuth2Session("google", success, failed);
    } catch (error) {
      console.log("Google auth error in auth.js folder of appwrite", error);
    }
  }
}

const authService = new AuthService();

export default authService;
