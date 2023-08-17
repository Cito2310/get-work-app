import puppeteer from "puppeteer";
import { getWorksBumeran } from "./helpers/getWorksBumeran";
import { getWorksComputrabajo } from "./helpers/getWorksComputrabajo";
import { writeFileSync } from "fs";

const getWorks = async() => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    const worksBumeran = await getWorksBumeran(page!);
    const worksComputrabajo = await getWorksComputrabajo(page!);

    return [...worksBumeran, ...worksComputrabajo];
}

getWorks().then( value => {
    writeFileSync("data/works.json", JSON.stringify(value), "utf-8");
    console.log("done");
})