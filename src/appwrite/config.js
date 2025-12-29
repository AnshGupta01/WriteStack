import conf from '../conf/conf.js';
import { Client, Account, ID, Databases, Storage, Query, TablesDB } from "appwrite";

export class Service {
    client = new Client();
    tablesDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.tablesDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImageId, status, userId }) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: ID.unique(),
                data: {
                    title,
                    slug,
                    content,
                    featuredImageId,
                    status,
                    userId
                }
            })

        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
            return false;
        }
    }

    async updatePost(slug, { title, content, featuredImageId, status }) {
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImageId,
                    status
                }
            })

        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
            return false;
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            })
            return true;

        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            });

        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                queries: queries
            })

        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file
            })

        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            });
            return true;

        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId
        })
    }
}

const service = new Service();
export default service;