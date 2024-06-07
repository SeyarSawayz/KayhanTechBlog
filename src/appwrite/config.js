import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.url).setProject(conf.projectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, featuredImage, status, userId }) {
    try {
      const result = await this.database.createDocument(
        conf.databaseId,
        conf.collectionId,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      if (result) {
        return result;
      } else {
        return null;
      }
    } catch (error) {
      console.log(
        "Error in appwrite folder in conf.js  :: createPost :: method of service",
        error
      );
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const result = this.database.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );

      return result;
    } catch (error) {
      console.log(
        "Error in appwrite folder in conf.js  :: updatePost :: method of service",
        error
      );
    }
  }

  async deletePost(slug) {
    try {
      const result = await this.database.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
      if (result) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(
        "Error in appwrite folder in conf.js  :: deletePost :: method of service",
        error
      );
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.log(
        "Error in appwrite folder in conf.js  :: getPost :: method of service",
        error
      );
      return false;
    }
  }

  async getAllPosts() {
    try {
      const posts = await this.database.listDocuments(
        conf.databaseId,
        conf.collectionId,
        [Query.equal("status", "active")]
      );
      if (posts) {
        return posts;
      } else {
        return false;
      }
    } catch (error) {
      console.log(
        "Error in appwrite folder in conf.js  :: getAllPosts :: method of service",
        error
      );
    }
  }
}

const service = new Service();

export default service;
