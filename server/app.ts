import { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import { v4 as uuidv4 } from 'uuid';

import { getWorksBumeran } from "./helpers/getWorksBumeran";
import { getWorksComputrabajo } from "./helpers/getWorksComputrabajo";

import { JSONWorks } from './../types/jsonWorks';



const getWorks = async() => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    const worksBumeran = await getWorksBumeran(page!);
    const worksComputrabajo = await getWorksComputrabajo(page!);

    return [...worksBumeran, ...worksComputrabajo];
}



const timeStart = new Date().getTime();



getWorks().then( value => {
    const dataToWrite: JSONWorks = {
        data: value,
        id: uuidv4(),
        date: new Date(),
    }

    writeFileSync("data/works.json", JSON.stringify(dataToWrite), "utf-8");

    console.log("done");

    const ms = new Date().getTime() - timeStart;
    const min = Math.floor((ms/1000/60) << 0);
    const sec = Math.floor((ms/1000) % 60);
    console.log(`Time to finish: ${min + ':' + sec}`);

    process.exit();
})
