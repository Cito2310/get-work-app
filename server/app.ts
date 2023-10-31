import { existsSync, mkdirSync, writeFileSync } from "fs";
import puppeteer from "puppeteer";
import { v4 as uuidv4 } from 'uuid';

import { getWorksComputrabajo, getAllWorksBumeran } from "./helpers";

import { JSONWorks, WorkOffer } from './../types';


const getWorks = async() => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    const allWorkBumeran = await getAllWorksBumeran(page);
    
    const worksReactComputrabajo = await getWorksComputrabajo(page, "react");
    const worksNodejsComputrabajo = await getWorksComputrabajo(page, "node");
    const worksDesarrolladorComputrabajo = await getWorksComputrabajo(page, "desarrollador");
    const worksfrontendComputrabajo = await getWorksComputrabajo(page, "frontend");

    return [
        ...allWorkBumeran,
        ...worksReactComputrabajo,
        ...worksNodejsComputrabajo,
        ...worksDesarrolladorComputrabajo,
        ...worksfrontendComputrabajo,
    ];
}



const timeStart = new Date().getTime();


getWorks().then( value => {
    const valueNotRepeat = value.reduce(( prev: WorkOffer[], curr: WorkOffer )=>{
        const existSameUrl = prev.some( work => work.url === curr.url );
        if ( !existSameUrl ) prev.push(curr);
        return prev;
    }, [])

    const dataToWrite: JSONWorks = {
        data: valueNotRepeat,
        id: uuidv4(),
        date: new Date(),
    }

    
    if (!existsSync("./data")) mkdirSync("./data");
    writeFileSync("data/works.json", JSON.stringify(dataToWrite), "utf-8");

    console.log("\n\n");
    console.log(`Length size: ${value.length}`)
    console.log(`Length filter size: ${valueNotRepeat.length}`)

    const ms = new Date().getTime() - timeStart;
    const min = Math.floor((ms/1000/60) << 0);
    const sec = Math.floor((ms/1000) % 60);
    console.log(`Time to finish: ${min + ':' + sec}`);

    process.exit();
})