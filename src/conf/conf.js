const conf = {
  url: String(import.meta.env.VITE_APPWRITE_URL),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECTID),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASEID),
  collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
  bucketId: String(import.meta.env.VITE_APPWRITE_BUCKETID),
  tinyMce: String(import.meta.env.VITE_TINYMCE),
};

export default conf;
