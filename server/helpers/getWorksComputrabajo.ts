import { Page } from "puppeteer"
import { WorkOffer } from "../../types/workOffer";


const day = 1;
const typeWork = "programador";
const baseUrl = "https://ar.computrabajo.com";
const createURL = ( page: number ) => `${baseUrl}/trabajo-de-${typeWork}?pubdate=${day}&p=${page}`;


export const getWorksComputrabajo = async (page: Page): Promise<WorkOffer[]> => {
    let allWorks = [];
    let worksFounds;
    let currentPage = 0;

    do {
        worksFounds = [];   // inicializa un array para guardar todos los trabajo de la pagina actual
        currentPage++;      // aumenta la pagina actual

        await page.goto( createURL( currentPage ) );
        
        try {
            await page.waitForSelector(".js-o-link.fc_base");
            // VARIABLE - OBTIENE UN ARRAY CON UN OBJETO DE LA INFORMACION DE LAS OFERTAS
            const offersWorksPage = await page.evaluate(()=>{
                const articles = Array.from( document.querySelectorAll("article") );
        
                const parseOffers = articles.map( article => {
                    const title = article.querySelector(".js-o-link")?.innerHTML;
                    const url = article.querySelector(".js-o-link")?.getAttribute("href");
                    const companyName = article.querySelector("[offer-grid-article-company-url]")?.innerHTML;
                    const modality = article.querySelector(".tag.base.mb10")?.textContent || null;
        
                    // OBTENER LOCACION
                    const textWithLocation = article.querySelector(".fs16.fc_base.mt5.mb5")?.textContent;
                    const arrayWithText = textWithLocation?.split(/\n\s+/g).filter( txt => txt );
                    const removedNumber = arrayWithText?.filter( str => !/[0-9.]/g.test(str) )
                    
                    const location = removedNumber?.length === 2 ? removedNumber[1] : removedNumber![0];
                    
                    return {
                        title: title || null,
                        url: url || null,
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


    allWorks.forEach( work => work.url = baseUrl + work.url )
    return allWorks;
}
