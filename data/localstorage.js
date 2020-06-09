import localStorageDB from 'localstoragedb';
import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";

var lib = new localStorageDB("library", localStorage);

export async function initDB(){
    console.log('Created table pays')
    let {data} = await axios.get("https://api.covid19api.com/summary");
    lib.createTableWithData("pays", data.Countries);
    lib.insert("pays",data.Global);
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
    if(lib.tableExists("pays") == false){
        await initDB();
    }
    let pays = lib.queryAll("pays");
    //db vide
    //6h old data ?
    if(checkDate(pays[0].Date)){
        return pays;
    }
    //update data
    else{
        await updateAllCountries();
    }
}
    
export async function getCountry(name){
    let {data} = await axios.get("https://api.covid19api.com/total/dayone/country/"+name);
    return data;
}     