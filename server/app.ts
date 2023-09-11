import { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import { v4 as uuidv4 } from 'uuid';

import { getWorksBumeran, getWorksComputrabajo } from "./helpers";

import { JSONWorks, WorkOffer } from './../types';



const getWorks = async() => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // page.on('console', (message) => {
    //     if (message.type() === 'log') console.log(`${message.text()}`);
    //   });

    const worksProgramadorBumeran = await getWorksBumeran(page!, "programador");
    const worksReactBumeran = await getWorksBumeran(page!, "react");
    const worksNodejsBumeran = await getWorksBumeran(page!, "nodejs");
    const worksDesarrolladorBumeran = await getWorksBumeran(page!, "desarrollador");
    const worksProgramadoresBumeran = await getWorksBumeran(page!, "programadores");
    const worksFrontEndBumeran = await getWorksBumeran(page!, "front-end");
    const worksfrontendBumeran = await getWorksBumeran(page!, "frontend");
    
    const worksProgramadorComputrabajo = await getWorksComputrabajo(page!, "programador");
    const worksReactComputrabajo = await getWorksComputrabajo(page!, "react");
    const worksNodejsComputrabajo = await getWorksComputrabajo(page!, "nodejs");
    const worksDesarrolladorComputrabajo = await getWorksComputrabajo(page!, "desarrollador");
    const worksProgramadoresComputrabajo = await getWorksComputrabajo(page!, "programadores");
    const worksFrontEndComputrabajo = await getWorksComputrabajo(page!, "front-end");
    const worksfrontendComputrabajo = await getWorksComputrabajo(page!, "frontend");

    return [
        ...worksProgramadorBumeran,
        ...worksProgramadorComputrabajo,
        ...worksReactBumeran,
        ...worksReactComputrabajo,
        ...worksNodejsBumeran,
        ...worksNodejsComputrabajo,
        ...worksDesarrolladorBumeran,
        ...worksDesarrolladorComputrabajo,
        ...worksProgramadoresBumeran,
        ...worksProgramadoresComputrabajo,
        ...worksFrontEndBumeran,
        ...worksFrontEndComputrabajo,
        ...worksfrontendBumeran,
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