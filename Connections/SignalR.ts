import * as signalR from "@microsoft/signalr";
import { GameState, gameStateAtom, errorMessageAtom } from "../state/BoardState";
import { getRecoil, setRecoil } from "recoil-nexus";
import { UpdateModel } from "../state/UpdateModel";
import { getUserId } from "../state/UserState";
import Constants from "expo-constants";

let userId = "";

const base_uri = Constants.expoConfig?.extra?.apiUrl || "UNKNOWN";
console.log("Base_URI", base_uri);



let connection = new signalR.HubConnectionBuilder()
    .withUrl(base_uri + "/tfmHub")
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

connection.on("send", data => {
    console.log(data);
});

connection.on("gameupdate", data => {
    setRecoil(gameStateAtom, data)
});

connection.on("errormessage", data => {
    console.log("errormessage", data);
    setRecoil(errorMessageAtom, data)
});

connection.onreconnecting(() => {
    const gameState = getRecoil(gameStateAtom);
    console.log("Reconnection");
    if (gameState && gameState.gameCode){
        console.log("Rejoining");
        JoinGame(gameState.gameCode, userId);
    }
})


async function Initalize(){
    userId = await getUserId();
    try{
        await connection.start();
    }
    catch(e){
        console.log("Entering Error");
        console.error(e);
        setRecoil(errorMessageAtom, "Error connecting to hub");
    }
}

Initalize();

export async function StartGame(gameCode: string, userName: string){
    try{
        await connection.invoke("StartGame", gameCode, userName, userId);
    }
    catch(e){
        setRecoil(errorMessageAtom, "Error sending StartGame state");
    }
    
}

export async function JoinGame(gameCode: string, userName: string){
    try{
        await connection.invoke("JoinGame", gameCode, userName, userId);
    }
    catch(e: any){
        setRecoil(errorMessageAtom, "Error sending JoinGame state");
        console.error(e);
    }
    
}

export async function UpdateGame(updateModel: UpdateModel){
    try{
       await connection.invoke("UpdateGameById", updateModel, userId);
    }
    catch(e){
        setRecoil(errorMessageAtom, "Error sending UpdateGame state");
    }
    
}

export async function Ready(gameCode: string){
    try{
        await connection.invoke("Ready", gameCode, userId);
    }
    catch(e){
        setRecoil(errorMessageAtom, "Error sending Ready State");
    }
    
}

export async function ReadyToProduce(gameCode: string){
    try{
        await connection.invoke("ReadyToProduce", gameCode, userId);
    }
    catch(e){
        setRecoil(errorMessageAtom, "Error sending ReadyToProduce");
    }
    
}
