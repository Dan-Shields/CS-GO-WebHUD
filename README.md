# CS:GO WebHUD

This is the HUD used for [KotN 2018](https://uomesports.co.uk), and potentially your next CSGO event.

Original design by [osztenkurden]( https://github.com/osztenkurden/CS-GO-Observer-Custom-HUD), base code by [Double0negative](https://github.com/Double0negative), HUD logic and updated design by yours truly.

## Install 

* Clone the repo
* Install Node.JS (NPM is included)
* Copy the file named `gamestate_integration_hud.cfg` in your csgo cfg folder (`steamapps/common/Counter-Strike Global Offensive/csgo/cfg/`)
* open CMD, type: cd \where\you\extracted\the\zip\CSGO-HUD-master
* in CMD: `npm install`
* in CMD: `node server.js`
* You should then be able to connect in a web browser by going to `http://localhost:2626`. Start up your game and connect to a match and data should begin streaming

## OBS

* Add a new browser source
* Use the URL `http://localhost:2626`
* Set the resolution to your base resolution
* Et voilà
