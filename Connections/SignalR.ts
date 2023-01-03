import * as signalR from "@microsoft/signalr";
import { GameState, gameStateAtom } from "../state/BoardState";
import { getRecoil, setRecoil } from "recoil-nexus";
import { UpdateModel } from "../state/UpdateModel";
import { userIdAtom } from "../state/UserState";

const base_uri = "https://tfmtracker.azurewebsites.net";

let connection = new signalR.HubConnectionBuilder()
    // .withUrl("http://192.168.0.219:33602/tfmHub")
    .withUrl(base_uri + "/tfmHub")
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

connection.on("playerid", data => {
    console.log("playerid", data);
    setRecoil(userIdAtom, data)
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

export async function StartGame(gameCode: string, userName: string){
    await connection.invoke("StartGame", gameCode, userName);
}

export async function JoinGame(gameCode: string, userName: string){
    await connection.invoke("JoinGame", gameCode, userName);
}

export function UpdateGame(gameState: UpdateModel){
    connection.invoke("UpdateGame", gameState);
}
