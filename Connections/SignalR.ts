import * as signalR from "@microsoft/signalr";
import { GameState, gameStateAtom, errorMessageAtom } from "../state/BoardState";
import { getRecoil, setRecoil } from "recoil-nexus";
import { UpdateModel } from "../state/UpdateModel";
import { getUserId } from "../state/UserState";
import Constants from "expo-constants";

const base_uri = Constants.expoConfig?.extra?.apiUrl || "UNKNOWN";
console.log("Base_URI", JSON.stringify(Constants.expoConfig?.extra));

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://192.168.0.219:33602/tfmHub")
    // .withUrl(base_uri + "/tfmHub")
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

console.log("Hub Connection", connection.connectionId);

connection.on("send", data => {
    console.log(data);

});

connection.on("gameupdate", data => {
    console.log("GameUpdate", JSON.stringify(data));
    setRecoil(gameStateAtom, data)
});

connection.on("errormessage", data => {
    console.log("errormessage", data);
    setRecoil(errorMessageAtom, data)
});


async function Initalize(){
    userId = await getUserId();
    console.log("UserID", userId);
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

Initalize();

export async function StartGame(gameCode: string, userName: string){
    await connection.invoke("StartGame", gameCode, userName, userId);
}

export async function JoinGame(gameCode: string, userName: string){
    await connection.invoke("JoinGame", gameCode, userName, userId);
}

export function UpdateGame(gameState: UpdateModel){
    connection.invoke("UpdateGame", gameState, userId);
}

export function Ready(gameCode: string){
    connection.invoke("Ready", gameCode, userId);
}

export function ReadyToProduce(gameCode: string){
    connection.invoke("ReadyToProduce", gameCode, userId);
}
