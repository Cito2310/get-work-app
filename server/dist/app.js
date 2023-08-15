"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const puppeteer_1 = __importDefault(require("puppeteer"));
const day = 1;
const typeJob = "programador";
const baseUrl = "https://www.bumeran.com.ar";
const createURL = (page) => `${baseUrl}/empleos-publicacion-menor-a-${day}-dias-busqueda-${typeJob}.html?page=${page}`;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({ headless: "new" });
    const page = yield browser.newPage();
    // page.on('console', msg => console.log(msg.text()));      // DEV - obtiene los console.log, ayuda al desarrollar
    let allWorks = [];
    let worksFounds;
    let currentPage = 0;
    do {
        worksFounds = []; // inicializa un array para guardar todos los trabajo de la pagina actual
        currentPage++; // aumenta la pagina actual
        yield page.goto(createURL(currentPage));
        yield page.waitForSelector("#listado-avisos"); // espera a que la pagina y las ofertas de carguen
        // VARIABLE - OBTIENE UN ARRAY CON UN OBJETO DE LA INFORMACION DE LAS OFERTAS
        const offersWorksPage = yield page.evaluate(() => {
            const div = document.querySelector("#listado-avisos"); // esta es la seccion que contienete todos las ofertas de trabajo
            const children = Array.from(div.children); // obtiene todos los hijos de la seccion anterior
            const sectionOffers = children
                .filter((element => element.tagName === "DIV")) // obtiene unicamente los divs, que son las ofertas y una parte inutil
                .map(element => element.firstElementChild); // obtiene el elemento que contiene toda la informacion de la oferta
            const onlyOffers = sectionOffers.slice(0, sectionOffers.length - 1); // elimina la parte inutil que se encontraba al final del array
            const parseOffers = onlyOffers.map(elementArchor => {
                var _a, _b;
                const children = Array.from(elementArchor.children);
                const url = elementArchor === null || elementArchor === void 0 ? void 0 : elementArchor.getAttribute("href"); // obtiene el url de la oferta
                const companyName = children.map(child => { var _a; return (_a = child.querySelector("h3")) === null || _a === void 0 ? void 0 : _a.textContent; })[0]; // obtiene el nombre de la compania
                const description = children.map(child => { var _a; return (_a = child.querySelector("p")) === null || _a === void 0 ? void 0 : _a.textContent; })[0]; // obtiene la descripcion basica del trabajo
                // OBTENER LA LOCACION DEL TRABAJO
                const pinIconElement = children.map(child => child.querySelector(`[name=icon-light-location-pin]`))[0]; // obtener primero el icono pin
                const location = (_a = pinIconElement === null || pinIconElement === void 0 ? void 0 : pinIconElement.nextElementSibling) === null || _a === void 0 ? void 0 : _a.textContent; // obtener el elemento hermano del icono, el cual es un H3 con la localizacion y obtener el texto
                // OBTENER LA MODALIDAD DEL TRABAJO
                const officeIconElement = children.map(child => child.querySelector(`[name=icon-light-office]`))[0]; // obtener primero el icono de la oficina
                const modality = (_b = officeIconElement === null || officeIconElement === void 0 ? void 0 : officeIconElement.nextElementSibling) === null || _b === void 0 ? void 0 : _b.textContent; // obtener el elemento hermano del icono, el cual es un H3 con la modalidad y obtener el texto
                return {
                    url: url || null,
                    companyName: companyName || null,
                    description: description || null,
                    location: location || null,
                    modality: modality || null
                };
            });
            return parseOffers;
        });
        worksFounds.push(...offersWorksPage);
        allWorks.push(...offersWorksPage);
    } while (worksFounds.length !== 0);
    (0, fs_1.writeFileSync)("data.json", JSON.stringify(allWorks), "utf-8");
    console.log("DONE");
}))();
// await page.waitForSelector("#listado-avisos")           // espera a que la pagina y las ofertas de carguen
// const getOffersWork: JobOffer[] = await page.evaluate( () => {
//     const div = document.querySelector("#listado-avisos");  // esta es la seccion que contienete todos las ofertas de trabajo
//     const children = Array.from(div!.children);             // obtiene todos los hijos de la seccion anterior
//     const sectionOffers = children
//         .filter(( element => element.tagName === "DIV" ))   // obtiene unicamente los divs, que son las ofertas y una parte inutil
//         .map( element => element.firstElementChild );       // obtiene el elemento que contiene toda la informacion de la oferta
//     const onlyOffers = sectionOffers.slice (0, sectionOffers.length-1 ); // elimina la parte inutil que se encontraba al final del array
//     const parseOffers: JobOffer[] = onlyOffers.map( elementArchor => {
//         const children = Array.from( elementArchor!.children );
//         const url = elementArchor?.getAttribute("href");      // obtiene el url de la oferta
//         const companyName = children.map( child => child.querySelector("h3")?.textContent )[0];     // obtiene el nombre de la compania
//         const description = children.map( child => child.querySelector("p")?.textContent )[0];      // obtiene la descripcion basica del trabajo
//         // OBTENER LA LOCACION DEL TRABAJO
//         const pinIconElement = children.map( child => child.querySelector(`[name=icon-light-location-pin]`) )[0]    // obtener primero el icono pin
//         const location = pinIconElement?.nextElementSibling?.textContent         // obtener el elemento hermano del icono, el cual es un H3 con la localizacion y obtener el texto
//         // OBTENER LA MODALIDAD DEL TRABAJO
//         const officeIconElement = children.map( child => child.querySelector(`[name=icon-light-office]`) )[0]    // obtener primero el icono de la oficina
//         const modality = officeIconElement?.nextElementSibling?.textContent         // obtener el elemento hermano del icono, el cual es un H3 con la modalidad y obtener el texto
//         return {
//             url,
//             companyName,
//             description,
//             location,
//             modality
//         }
//     })
//     return parseOffers;
// })
// console.log( getOffersWork )
// console.log( root )
// writeFileSync( "test.html", JSON.stringify( root ), "utf-8" )
// writeFileSync( "test.json", JSON.stringify( root ), "utf-8" )
