const mongoString = "mongodb+srv://jakubczajkowski04:1234@tak.5m1sarn.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');//sterownik o nazwie MongoClient




async function main(){
    //stworzenie połączenia z bazą
const client = new MongoClient(mongoString); 
    try{
        //spróbuj nawiązać poł
        await client.connect();
        //uruchamianie funkci pokazującą baze danyuch - atrybut przekazania do bazy danych
       await listDB(client);
    }catch(error){

        //jak się rozjebie
            console.error(error);
    } finally {

        //obojętnie
        await client.close();
    }

    

    


}

async function listDB(client){

   //zmienna z listą 
let databaseList = await client.db().admin().listDatabases();

//console.log(databaseList);

databaseList.databases.forEach(database =>{

    console.log("Nazwa: " + database.name + " Rozmiar: " + database.sizeOnDisk);
});

}

main();
