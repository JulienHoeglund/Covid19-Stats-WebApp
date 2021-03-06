import localStorageDB from 'localstoragedb';
import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";
const moment = require('moment')
moment.locale('fr')

var lib = new localStorageDB("library", localStorage);

export async function initDBCountries(){
    let {data} = await axios.get("https://api.covid19api.com/summary");
    lib.createTableWithData("pays", data.Countries);
    lib.commit();
}

export async function getCountries(){
    //query localstorage
    if(lib.tableExists("pays") == false){
        await initDBCountries();
    }
    //6h old data ?
    let pays = lib.queryAll("pays");
    if(checkDate(pays[0].Date)){
        return pays;
    }
    //update data
    else{
        lib.dropTable("pays");
        initDBCountries();
    }
}
export async function getGlobalStats(){
    let {data} = await axios.get("https://api.covid19api.com/summary"); 
    return data['Global'];
}
export async function initDBUnPays(){
    let unpays = [];
    try{
        let {data} = await axios.get("https://api.covid19api.com/total/dayone/country/"+"france");
        for(const jour of data){
            unpays.push(jour);
        }
    }catch(e){
    }
    lib.createTableWithData("unpays", unpays);
    lib.commit();
    lib.alterTable("unpays",["lastUpdate","confirmedDiff","recoveredDiff","deathsDiff"]);
    lib.commit();
}
export async function getCountry(country){
    //query localstorage
    if(!lib.tableExists("unpays")){
        await initDBUnPays();
    }
    //check if exists

    let nom = getName(country)
    let pays = lib.queryAll("unpays", {
        query: {Country: nom}});
    //6h old data ?
    lib.deleteRows("unpays",{Country:country});
    await insertCountryData(country);
    if(pays[0]){
        if(checkDate(pays.lastUpdate)){
            return pays;
        }
        //update data
        else{
        //replace rows with new data
            lib.deleteRows("unpays",{Country:country});
            await insertCountryData(country);
            return lib.queryAll("unpays", {
                query: {Country: nom}});
        }
    }
    //first insert
    else{
        await insertCountryData(country);
        return lib.queryAll("unpays", {
            query: {Country: nom}});
    }
}
async function insertCountryData(country){
    let {data} = await axios.get("https://api.covid19api.com/total/dayone/country/"+country);
    data.forEach(function (row,index){
        row['lastUpdate'] = moment().format(); 
        lib.insert("unpays",row);
    })
    lib.commit();
}
//get le nom à partir du slug dans la table countries
function getName(slug){
    let pays = lib.queryAll("pays", {
        query: {Slug: slug}});
    return pays[0]['Country']
}
function checkDate(date){
    let dataDate = new Date(date);
    let currentDate = new Date();
    const milliseconds = Math.abs(dataDate - currentDate);
    const hours = milliseconds / 36e5;
    if(hours >= 6.0)
        return false;
    return true;
}


