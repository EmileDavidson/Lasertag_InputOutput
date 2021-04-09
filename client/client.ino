#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
//#include <ArduinoJson.h>

//player datta
int playerID = 0;
int lives = 5;
int deathCount = 0;
String KillsBy;

const char* ssid     = "ssid"; // wifi lan station id
const char* password = "pass"; // wifi lan password

// http://29151.hosts2.ma-cloud.nl/Lasertag_InputOutput/Website/PHP/client_send_data.php?playerid=8888&deaths=2&kills=4&lives=23
String server  = "http://29151.hosts2.ma-cloud.nl";
String pathSendData = "/Lasertag_InputOutput/Website/PHP/client_send_data.php"; 
 
static const uint8_t led = D2; //LED indicator on D2

void setup(void) {
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  httpRequestSendData();
}

void loop(void){}

void httpRequestSendData(){
  HTTPClient http;                   //Instance of class HTTPClient
  String url = server + pathSendData  + "?playerid=" + playerID + "&deaths=" + deathCount + "&KillsBy=" + KillsBy + "&lives=" + lives;
  Serial.println(url);               // handig voor debuggen
  http.begin(url);                   //Specify request destination
  
  int httpCode = http.GET();         //Send the request  
  if (httpCode > 0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpCode);
        String payload = http.getString();
        Serial.println("");
        Serial.println("");
        Serial.println("");
        Serial.println(payload);
      }
      else {
        Serial.print("Error code: ");
        Serial.println(httpCode);
      }
      // Free resources
      http.end();
  }

void IrRecieve(){
  //we just received infra-red

  //code here

  //send new data to server
  httpRequestSendData();
}

void IrSend(){
  //what needs to happen on send
}

void RemoveHealth(int amount){
  lives -= amount;
}

void AddHealth(int amount){
  lives += amount;
}

void AddDeath(int shooterID){
  deathCount += 1;
  KillsBy += "," + String(shooterID);
}

//AddHealth(int amount){
//  int lives += amount;
//}
//
//AddDeath(){
//  deaths += 1;
//}
