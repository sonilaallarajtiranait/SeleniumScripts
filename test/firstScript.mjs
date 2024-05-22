import { expect } from 'chai';
import { Builder, By, until } from 'selenium-webdriver';


describe.only('log in flow', async => {
    let driver;
    beforeEach(async() => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://merchant-staging.pokpay.io/login');
    }),
    afterEach(async () => {
        await driver.quit()
    })

    it.only('should log in successfully', async () => {
    let incorrectMsg = '"username" is not allowed to be empty. "password" is not allowed to be empty'
    await driver.sleep(1000)
    await driver.findElement(By.xpath("html//div[@id='root']/div[1]//form[@class='mt-12 space-y-4']/div[1]/div[1]/input")).sendKeys('')
    await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('')
    await driver.findElement(By.xpath('//*[@id="root"]/div[1]/div[1]/div/form/button')).click()

    await driver.sleep(1000)
    let expectedMsg = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div/div/div')).getText().then(value => value)

    expect(expectedMsg).to.equal(incorrectMsg)
    })
})