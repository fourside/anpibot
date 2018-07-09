//import * as puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

const option = {
  //headless: false,
  //slowMo: 550
};
export default async function (url: string): Promise<void> {
  const browser = await puppeteer.launch(option);
  const page = await browser.newPage();
  //page.on('console', (...args) => {
    //args.forEach((arg) => {
      //console.log('console.log:', arg._text);
    //});
  //});
  await page.goto(url);
  await page.click('input[name="stscd"]');
  await page.click('input[name="17400"]');
  await page.click('input[name="btnReg"]');

  await browser.close();
};

