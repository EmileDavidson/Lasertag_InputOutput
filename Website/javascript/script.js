let jsonObj = "";
let playerData = [];

serverGetJson();
setInterval(serverGetJson, 100);

/**
 * keeps requesting the json so we have an up to data json
 * @param jsonString the json we got from ajax
 */
function readJson(jsonString) {
    jsonObj = JSON.parse(jsonString);
    for (let i = 0 ; i < jsonObj.length; i++){
        playerData[i] = new Player(jsonObj[i].playerId, jsonObj[i].playerKills, jsonObj[i].playerDeaths);
    }
}

/**
 * to change data in the json
 * @constructor
 */
function SendNewData(){
    playerData[0].playerId = 12;
    serverWriteJson(playerData);
}

/**
 * player class for all the data each player has.
 */
class Player{
    constructor(id, kills, deaths) {
        this.playerId = id;
        this.playerKills = kills;
        this.playerDeaths = deaths;
    }
}

