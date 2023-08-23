import { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import { v4 as uuidv4 } from 'uuid';

import { getWorksBumeran, getWorksComputrabajo } from "./helpers";

import { JSONWorks, WorkOffer } from './../types';



const getWorks = async() => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    const worksProgramadorBumeran = await getWorksBumeran(page!, "programador");
    const worksProgramadorComputrabajo = await getWorksComputrabajo(page!, "programador");

    const worksReactBumeran = await getWorksBumeran(page!, "react");
    const worksReactComputrabajo = await getWorksComputrabajo(page!, "react");

    const worksNodejsBumeran = await getWorksBumeran(page!, "nodejs");
    const worksNodejsComputrabajo = await getWorksComputrabajo(page!, "nodejs");

    return [
        ...worksProgramadorBumeran,
        ...worksProgramadorComputrabajo,
        ...worksReactBumeran,
        ...worksReactComputrabajo,
        ...worksNodejsBumeran,
        ...worksNodejsComputrabajo,
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

    console.log("done");
    console.log(`Length size: ${valueNotRepeat.length}`)

    const ms = new Date().getTime() - timeStart;
    const min = Math.floor((ms/1000/60) << 0);
    const sec = Math.floor((ms/1000) % 60);
    console.log(`Time to finish: ${min + ':' + sec}`);

    process.exit();
})
