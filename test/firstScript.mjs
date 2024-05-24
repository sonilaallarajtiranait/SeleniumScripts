import { expect } from 'chai';
import { Builder, By, Key } from 'selenium-webdriver';

describe('log in flow', () => {
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://www.zara.com/al/en/');
    });

    afterEach(async () => {
        await driver.quit();
    });

    it('should open the selected item', async () => {
        let correctMsg = 'SHORT SLEEVE T-SHIRT';
        await driver.sleep(1000);
        await driver.findElement(By.xpath('//*[@id="theme-app"]/div/div/header/div[2]/div/a')) .click();
        const searchInput = await driver.findElement(By.xpath('//*[@id="search-products-form-combo-input"]'));
        await searchInput.sendKeys('WHITE T-SHIRT', Key.ENTER);
        
        // await driver.findElement(By.xpath('//*[@id="search-products-form-combo-input"]')) .sendKeys('WHITE T-SHIRT');
        // await searchInput.sendKeys(Key.ENTER);
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[1]/div[3]/div[1]/div[1]/nav/ul/li[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[1]/div[3]/div[1]/div[1]/div/div/div[1]/fieldset/div[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[1]/div[3]/div[1]/div[1]/div/div/div[2]/button[2]')).click();
        // await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[2]/section[1]/ul/li[1]/div[1]/a/div/div/div/div/div[2]/ul/li[1]/div/div/img'))
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[2]/section/ul/li[1]')).click();
        let successfulMsg = await driver.findElement(By.xpath('//*[@id="main"]/article/div/div[1]/div[2]/div/div[1]/div[1]/div/h1')).getText().then(value => value);
        expect(successfulMsg).to.equal(correctMsg);
    });
});
