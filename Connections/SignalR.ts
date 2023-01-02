import * as signalR from "@microsoft/signalr";
import { GameState, gameStateAtom } from "../state/BoardState";
import { getRecoil, setRecoil } from "recoil-nexus";
import { UpdateModel } from "../state/UpdateModel";

const base_uri = "http://localhost:5045";

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://192.168.0.219:33602/tfmHub")
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

console.log("Hub Connection", connection.connectionId);

connection.on("send", data => {
    console.log(data);

});

connection.on("gameupdate", data => {
    console.log("GameUpdate", data);
    setRecoil(gameStateAtom, data)
});



async function StartHub(){
    console.log("Conneting to Hub");
    try{
        await connection.start();
        // connection.invoke("StartGame", "foo");
        console.log("Hub Connection2", connection.connectionId);
    }
    catch(e){
        console.log("Entering Error");
        console.error(e);
    }
}

StartHub();

export function StartGame(gameCode: string, userName: string){
    connection.invoke("StartGame", gameCode, userName);
}

export function UpdateGame(gameState: UpdateModel){
    connection.invoke("UpdateGame", gameState);
}
