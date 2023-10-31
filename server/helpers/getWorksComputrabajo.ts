import { Page } from "puppeteer"
import { WorkOffer } from "../../types/workOffer";

const baseUrl = "https://ar.computrabajo.com";

export const getWorksComputrabajo = async (page: Page, typeWork: string): Promise<WorkOffer[]> => {
    const createURL = ( page: number ) => `${baseUrl}/trabajo-de-${typeWork}?pubdate=1&p=${page}`;


    let allWorks = [];
    let worksFounds;
    let currentPage = 0;

    do {
        worksFounds = [];   // inicializa un array para guardar todos los trabajo de la pagina actual
        currentPage++;      // aumenta la pagina actual

        await page.goto( createURL( currentPage ) );
        
        try {
            await page.waitForSelector(".js-o-link.fc_base", { timeout:8000 });
            // VARIABLE - OBTIENE UN ARRAY CON UN OBJETO DE LA INFORMACION DE LAS OFERTAS
            const offersWorksPage = await page.evaluate(()=>{
                const articles = Array.from( document.querySelectorAll("article") );

                const parseOffers = articles.map( article => {
                    const title = article.querySelector(".js-o-link")?.innerHTML;
                    const url = article.querySelector(".js-o-link")?.getAttribute("href");
                    const companyName = article.querySelector("[offer-grid-article-company-url]")?.innerHTML;
                    const modality = article.querySelector(".tag.base.mb10")?.textContent || null;
                    const location = article.querySelectorAll(".fs16.fc_base.mt5")[1].textContent || null;
                   
                    return {
                        title: title || "",
                        url: url || "",
                        companyName: companyName || null,
                        modality: modality || null,
                        location: location || null,
                        description: null,
                    }
                })
        
                return parseOffers
            })
    
            worksFounds.push( ...offersWorksPage );
            allWorks.push( ...offersWorksPage );
            
        } catch (error) {}

    } while ( worksFounds.length !== 0 || false );

    console.log(`Computrabajo --> Trabajos de ${typeWork} | Cantidad: ${allWorks.length}`)
    allWorks.forEach( work => work.url = baseUrl + work.url )
    return allWorks;
}
