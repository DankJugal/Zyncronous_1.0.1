// import { ExecutionEnviornment } from "@/lib/types";
// import puppeteer from "puppeteer";
// import { LaunchBrowserTask } from "../task/LaunchBrowser";

// export async function LaunchBrowserExecutor(
//   enviornment: ExecutionEnviornment<typeof LaunchBrowserTask>
// ): Promise<boolean> {
//   try {
    
//     const websiteUrl = enviornment.getInput("Website Url"); 
// const browser = await puppeteer.launch({ 
// headless: true, 
// args: ["--proxy-server=brd.superproxy.io:22225"], 
// }); 
// enviornment.log.info("Browser started successfully"); 
// enviornment.setBrowser (browser); 
// const page = await browser.newPage(); 
// page.setViewport ({ width: 2560, height: 1440 }); 
// await page.authenticate({ 
// username: process.env.USERNAME_PROXY!, 
// password: process.env.PASSWORD_PROXY!, 
//   }); 
// await page.goto (websiteUrl); 
// enviornment.setPage (page); 
// enviornment.log.info('Opened page at: ${websiteUrl}');
    
//     return true;
//   } catch (error: any) {
//     enviornment.log.error(error.message);
//     return false;
//   }
// }

import { ExecutionEnviornment } from "@/lib/types";
import puppeteer from "puppeteer";
import { LaunchBrowserTask } from "../task/LaunchBrowser";

export async function LaunchBrowserExecutor(
  enviornment: ExecutionEnviornment<typeof LaunchBrowserTask>
): Promise<boolean> {
  try {
    const websiteUrl = enviornment.getInput("Website Url");
    console.log(websiteUrl);

    const browser = await puppeteer.launch({
      headless: true, 
      args: ["--no-sandbox"],
    });
    enviornment.log.info("Browser started successfully");
    enviornment.setBrowser(browser);
    const page = await browser.newPage();
    await page.goto(websiteUrl);
    enviornment.setPage(page);
    enviornment.log.info(`Opened page at: ${websiteUrl}`);
    return true;
  } catch (error: any) {
    enviornment.log.error(error.message);
    return false;
  }
}