let jsonObj = "";
let playerData = [];

//request url data


//request json from ajax edit it to new data an send it.
serverGetJson();

/**
 * keeps requesting the json so we have an up to data json
 * @param jsonString the json we got from ajax
 */
function readJson(jsonString) {
    jsonObj = JSON.parse(jsonString);
    for (let i = 0 ; i < jsonObj.length; i++){
        playerData[i] = new Player(jsonObj[i].playerId, jsonObj[i].playerKills, jsonObj[i].playerDeaths, jsonObj[i].lives);
    }
    AddToData(UrlDataplayerid, UrlDatadeaths, UrlDatakills, UrlDatalives);
}

function SendNewData(){
    serverWriteJson(playerData);
    return;
}

/**
 * to add data in json
 * @constructor
 */
function AddToData(playerid, deaths, kills, lives){
    if(playerData == null) return;

    //loop to check if it exists.
    for(let i = 0 ; i < playerData.length; i++){
        console.log("LOOP!")
        if(playerData[i].playerId == playerid){
            console.log("FOUND IT")
            playerData[i].playerDeaths = deaths;
            playerData[i].playerKills = kills;
            playerData[i].lives = lives;

            console.log("sending DATA..")
            SendNewData();
            return;
        }
    }

    console.log("NOT FOUND ADDING IT..")
    //the player didnt exists yet.
    playerData.push(new Player(playerid, kills, deaths, lives));
    console.log("sending DATA..")
    SendNewData();
    return;
}

/**
 * player class for all the data each player has.
 */
class Player{
    constructor(id, kills, deaths, lives) {
        this.playerId = id;
        this.playerKills = kills;
        this.playerDeaths = deaths;
        this.lives = lives;
    }
}

