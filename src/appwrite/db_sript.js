//This script must be run seperately when needed
// Rest focus on having permissions in storage, auth and this database table
import * as sdk from 'node-appwrite';
// Init SDK
const client = new sdk.Client();

const tablesDB = new sdk.TablesDB(client);

client
    .setEndpoint("") // Your API Endpoint
    .setProject("") // Your project ID
    .setKey("") // Your secret API key
    ;

const promise = tablesDB.createTable({
    databaseId: "",
    tableId: "",
    name: "articles",
    columns: [
        { key: "userId", type: "string", size: 255, required: true },
        { key: "title", type: "string", size: 255, required: true },
        { key: "content", type: "string", size: 255, required: true },
        { key: "featuredImage", type: "string", size: 255, required: true},
        { key: "status", type: "string", size: 255, required: false }
    ],
    indexes: [
    ],
});

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});