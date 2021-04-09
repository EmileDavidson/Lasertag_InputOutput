let controlScript = "../PHP/jsonWrite.php";
let jsonFile = "../PHP/data.json";

function MakeAjaxCall(url, methodType) {
    let promiseObj = new Promise(function (resolve, reject) {

        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open(methodType, url, true)
        xmlHttp.send();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState != 4) {
                // console.log("Bezig met ophalen");
                return;
            }
            if (xmlHttp.status != 200) {
                reject(xmlHttp);
                // console.log("er is iets fout gegaan")
                return;
            }
            // console.log("Succesvol");
            let serverResponse = xmlHttp.responseText;
            resolve(serverResponse);
        }
    });
    return promiseObj;
}

function errorHandler(statusCode){
    console.log("failed with status", status);
}

function serverWriteJson(data) {
    console.log("Updating server map");
    console.log(data);
    let dataJsonString = JSON.stringify(data);
    console.log(dataJsonString);
    let url = controlScript + "?put=" + dataJsonString;
    console.log(url);
    MakeAjaxCall(url, "GET");
}

function serverGetJson() {
    MakeAjaxCall(jsonFile, "GET").then(function (JSONresponse) {
        readJson(JSONresponse)
    });
}