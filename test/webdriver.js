const { expect } = require('chai');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const By=webdriver.By;
const firefox = require('selenium-webdriver/firefox');



describe('百度首页UI测试', function(){
    this.timeout(50000);//延迟超时时间

    let driver;

    before(()=>{
        driver=new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments(['headless']))//到Chrome的headless模式
    .build();
    });

    it('should have 百度一下，你就知道 ',done=>{
        driver.get('https://www.baidu.com/').then(()=>{
            driver.getTitle().then(title=>{
                expect(title).to.equal('百度一下，你就知道');
                done();
            });
        });
    });

    it("should have buttom value 百度一下",done=>{
        driver.findElement(By.id('su')).then(button=>{
            button.getAttribute('value').then(val=>{
                expect(val).to.equal('百度一下');
                done();
            })
        })
    });

    after(()=>{
        driver.quit();
    })
})