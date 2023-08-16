import { getWorksBumeran } from "./helpers/getWorksBumeran";
import { getWorksComputrabajo } from "./helpers/getWorksComputrabajo";
import { writeFileSync } from "fs";
import puppeteer from "puppeteer";


(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    // page.on('console', msg => console.log(msg.text()));      // DEV - obtiene los console.log, ayuda al desarrollar
    
    const worksBumeran = await getWorksBumeran(page);
    const worksComputrabajo = await getWorksComputrabajo(page);

    let allWorks = [...worksBumeran, ...worksComputrabajo];
    const allWorksWithId = allWorks.map((work, index) => ({ ...work, id: index }));

    writeFileSync("data/data.json", JSON.stringify( allWorksWithId ), "utf-8")

    console.log("DONE")
})()