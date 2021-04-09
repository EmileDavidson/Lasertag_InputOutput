let jsonObj = "";
let playerData = [];
let datarows = document.getElementsByClassName("data-display");
//data displayer
let table = document.getElementById("data-table");

serverGetJson();
setInterval(serverGetJson, 1000);

/**
 * keeps requesting the json so we have an up to data json
 * @param jsonString the json we got from ajax
 */
function readJson(jsonString) {
    jsonObj = JSON.parse(jsonString);
    for (let i = 0 ; i < jsonObj.length; i++){
        playerData[i] = new Player(jsonObj[i].playerid, jsonObj[i].deaths, jsonObj[i].KillsBy, jsonObj[i].lives);
    }
    if(playerData.length <= 0) return;
    DisplayData();
    DisplayKillCount();
}

function DisplayData(){
    for (let j = 0; j < playerData.length; j++){
        let displayed = false;
        for(let i = 0; i < datarows.length; i++){
            let pid = datarows[i].childNodes[0].childNodes[0].nodeValue;
            if(playerData[j].playerId == pid) {
                datarows[i].childNodes[1].childNodes[0].nodeValue = playerData[j].deathCount;
                datarows[i].childNodes[3].childNodes[0].nodeValue = playerData[j].lives;
                displayed = true;
                break;
            }
        }
        if(displayed) continue;
        CreateNewRow(playerData[j].playerId, playerData[j].deathCount, playerData[j].lives, 0);
    }
}

function DisplayKillCount(){
    let dict = {};
    for (let j = 0; j < playerData.length; j++){
        dict[playerData[j].playerId] = 0;
    }

    for (let j = 0; j < playerData.length; j++){
        let id = playerData[j].playerId;
        let killString = playerData[j].KillsBy;
        let killArr = killString.split(",");
        
        for (let i = 0; i < killArr.length; i++){
            let deathID = killArr[i];
            if(dict[deathID] == undefined) dict[deathID] = 1;
            else dict[deathID] += 1;
        }        
    }

    for(var key in dict) {
        if(key == undefined || key == null || key == "") continue;

        var killCount = dict[key];
        let displayed = false;

        for(let i = 0; i < datarows.length; i++){
            let pid = datarows[i].childNodes[0].childNodes[0].nodeValue;
            if(key == pid) {
                datarows[i].childNodes[2].childNodes[0].nodeValue = killCount;
                displayed = true;
                break;
            }
        }

        if(displayed) continue;
        CreateNewRow(key, "unknown", "unknown", killCount);
    }
}

function CreateNewRow(id, dcount, lives, kills){
    console.log("Creating new row!")
    //player was not found create it.

    let tr = document.createElement("tr")
    tr.classList.add("data-display");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = id;
    td2.innerHTML = dcount;
    td3.innerHTML = kills;
    td4.innerHTML = lives;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);
}

function resetJson(){
        serverWriteJson([]);
        return;
}


/**
 * player class for all the data each player has.
 */
class Player{
    constructor(id, deathCount, DeathByPlayers, lives) {
        this.playerId = id;
        this.deathCount = deathCount;
        this.KillsBy = DeathByPlayers;
        this.lives = lives;
    }
}