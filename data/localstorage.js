import localStorageDB from 'localstoragedb';
import axios from 'axios';

export function initDB(){
    // Initialise. If the database doesn't exist, it is created
    var lib = new localStorageDB("library", localStorage);

    // Check if the database was just created. Useful for initial database setup
    if( lib.isNew() ) {

        // create the "books" table
        lib.createTable("countries", ["code", "title", "author", "year", "copies"]);

        // insert some data
        lib.insert("books", {code: "B001", title: "Phantoms in the brain", author: "Ramachandran", year: 1999, copies: 10});

        // commit the database to localStorage
        // all create/drop/insert/update/delete operations should be committed
        lib.commit();
    }
    console.log('LOCAL STORAGE INITIALIZED')
}

export async function getCountries(){
    let {data} = await axios.get("https://api.covid19api.com/countries");
    console.log(data);
    return data;
}
    
export async function getCountry(name){
    let {data} = await axios.get("https://api.covid19api.com/total/dayone/country/france");
    return data;
}     