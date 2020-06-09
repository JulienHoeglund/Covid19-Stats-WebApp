import localStorageDB from 'localstoragedb';
import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";

var lib = new localStorageDB("library", localStorage);

export async function initDB(){
    // create the "books" table
    let {data} = await axios.get("https://api.covid19api.com/summary");
    console.log(data);        
    // insert some data
    lib.createTableWithData("pays", data.Countries);
    lib.insert("pays",data.Global);
    let pays = lib.queryAll("pays");
    console.log(pays);
    // commit the database to localStorage
    // all create/drop/insert/update/delete operations should be committed
    lib.commit();
}
function checkDate(date){
    let dataDate = new Date(date);
    let currentDate = new Date();
    const milliseconds = Math.abs(dataDate - currentDate);
    const hours = milliseconds / 36e5;
    console.log(hours);

    if(hours >= 6.0)
        return false;
    return true;
}
async function updateAllCountries(){
    lib.deleteRows("pays");
    let {data} = await axios.get("https://api.covid19api.com/summary");
    lib.insert("pays",data);
}
export async function getCountries(){
    //query localstorage
    let pays = lib.queryAll("pays");
    
    //db vide
    if(pays.length == 0){
        initDB();
    }
    //6h old data ?
    else if(checkDate(pays[0].Date)){
        return pays;
    }
    //update data
    else{
        await updateAllCountries();
    }
}
    
export async function getCountry(name){
    let {data} = await axios.get("https://api.covid19api.com/total/dayone/country/france");
    return data;
}     