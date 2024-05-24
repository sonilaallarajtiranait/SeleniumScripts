import { expect } from 'chai';
import { Builder, By, Key, until } from 'selenium-webdriver';

describe.only('zara flow', () => {
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://www.zara.com/al/en/');
    });

    afterEach(async () => {
        await driver.quit();
    });

    it('should open the selected item', async () => {
        let correctMsg = 'XS | WHITE';
        await driver.sleep(1000);
        await driver.findElement(By.xpath('//*[@id="theme-app"]/div/div/header/div[2]/div/a')).click();

        const searchInput = await driver.findElement(By.xpath('//*[@id="search-products-form-combo-input"]'));
        await searchInput.sendKeys('WHITE T-SHIRT', Key.ENTER);
        
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[1]/div[3]/div[1]/div[1]/nav/ul/li[1]')).click();
        
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[1]/div[3]/div[1]/div[1]/div/div/div[1]/fieldset/div[1]')).click();
       
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[1]/div[3]/div[1]/div[1]/div/div/div[2]/button[2]')).click();
        
        await driver.sleep(2000);
        
        await driver.findElement(By.xpath('//*[@id="main"]/article/div/div/section/div[2]/section/ul/li[1]')).click();
        await driver.findElement(By.xpath('//*[@id="product-size-selector-375320125-item-0"]')).click();
        const element = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="main"]/article/div/div[1]/div[2]/div/div[3]/div/div'))),4000);
        await element.click();
        
        await driver.findElement(By.xpath('//*[@id="theme-app"]/div/div/header/div[3]/a[3]')).click();
        let successfulMsg = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="main"]/article/div[2]/div/div/div/section/div/div[2]/div[1]/div[2]/div[3]'))), 4000).getText().then(value => value);
        expect(successfulMsg).to.equal(correctMsg);
    });
});
