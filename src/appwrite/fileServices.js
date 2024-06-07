import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

export class FileServices {
  client = new Client();
  bucket;

  constructor() {
    this.client.setEndpoint(conf.url).setProject(conf.projectId);
    this.bucket = new Storage(this.client);
  }

  async imageUpload(file) {
    try {
      return this.bucket.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      console.log(
        "Error accured on imageUpload in :: fileService :: of fileService.js",
        error
      );
      return false;
    }
  }

  async deleteImage(fileId) {
    try {
      await this.bucket.deleteFile(conf.bucketId, fileId);
      return true;
    } catch (error) {
      console.log(
        "Error on deleteimage method of filerService in appwrite folder",
        error
      );
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.bucketId, fileId);
    } catch (error) {
      console.log("Error in getFilePreview of fileService in appwrite", error);
    }
  }
}

const fileService = new FileServices();
export default fileService;
