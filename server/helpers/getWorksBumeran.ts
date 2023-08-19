import { Page } from "puppeteer";
import { WorkOffer } from "../../types/workOffer";


const day = 1;
const typeWork = "programador";
const baseUrl = "https://www.bumeran.com.ar";
const createURL = ( page: number ) => `${baseUrl}/empleos-publicacion-menor-a-${day}-dias-busqueda-${typeWork}.html?page=${page}`;


export const getWorksBumeran = async ( page: Page ): Promise<WorkOffer[]> => {
    let allWorks = [];
    let worksFounds;
    let currentPage = 0;

    do {
        worksFounds = [];   // inicializa un array para guardar todos los trabajo de la pagina actual
        currentPage++;      // aumenta la pagina actual

        await page.goto( createURL( currentPage ) );

        await page.waitForSelector("#listado-avisos")           // espera a que la pagina y las ofertas de carguen

        // VARIABLE - OBTIENE UN ARRAY CON UN OBJETO DE LA INFORMACION DE LAS OFERTAS
        const offersWorksPage: WorkOffer[] = await page.evaluate( () => {
            const div = document.querySelector("#listado-avisos");  // esta es la seccion que contienete todos las ofertas de trabajo
            const children = Array.from(div!.children);             // obtiene todos los hijos de la seccion anterior
    
            const sectionOffers = children
                .filter(( element => element.tagName === "DIV" ))   // obtiene unicamente los divs, que son las ofertas y una parte inutil
                .map( element => element.firstElementChild );       // obtiene el elemento que contiene toda la informacion de la oferta
    
            const onlyOffers = sectionOffers.slice (0, sectionOffers.length-1 ); // elimina la parte inutil que se encontraba al final del array
    
    
            const parseOffers: WorkOffer[] = onlyOffers.map( elementArchor => {
                const children = Array.from( elementArchor!.children );

                const url = elementArchor?.getAttribute("href");      // obtiene el url de la oferta
                const companyName = children.map( child => child.querySelector("h3")?.textContent )[0];     // obtiene el nombre de la compania
                const description = children.map( child => child.querySelector("p")?.textContent )[0];      // obtiene la descripcion basica del trabajo
    
                // OBTENER EL TITULO DEL TRABAJO
                const title = children.map( child => {
                    const h3 = child.querySelectorAll("h3");
                    if ( h3[2]?.textContent === " -" ) return h3[4]?.textContent;
                    return h3[2]?.textContent;
                })[0];

                // OBTENER LA LOCACION DEL TRABAJO
                const pinIconElement = children.map( child => child.querySelector(`[name=icon-light-location-pin]`) )[0]    // obtener primero el icono pin
                const location = pinIconElement?.nextElementSibling?.textContent         // obtener el elemento hermano del icono, el cual es un H3 con la localizacion y obtener el texto
    
                // OBTENER LA MODALIDAD DEL TRABAJO
                const officeIconElement = children.map( child => child.querySelector(`[name=icon-light-office]`) )[0]    // obtener primero el icono de la oficina
                const modality = officeIconElement?.nextElementSibling?.textContent         // obtener el elemento hermano del icono, el cual es un H3 con la modalidad y obtener el texto
    
                return {
                    title: title || null,
                    url: url || null,
                    companyName: companyName || null,
                    description: description || null,
                    location: location || null,
                    modality: modality || null
                }
            })
    
            return parseOffers;
        })

        worksFounds.push( ...offersWorksPage );
        allWorks.push( ...offersWorksPage );

    } while ( worksFounds.length !== 0 || false );

    allWorks.forEach( work => work.url = baseUrl + work.url )
    return allWorks;
}
