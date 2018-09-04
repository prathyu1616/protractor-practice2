var theInternetLocator= require('../internetExamplesLocators/theInternetExamplesLocators');
var theInternetModules=require('../internetExamplesModules/theInternetExamplesModules');

describe('title',function(){
    it('title',function(){
        browser.waitForAngularEnabled(false);
        //browser.manage().timeouts().implicitlyWait(30000);

        browser.get('https://the-internet.herokuapp.com/');

        //theInternetModules.toLink();
        // browser.sleep(3000);


        // theInternetModules.username();
        // Alert = browser.prompt("admin", "the-internet.herokuapp.com");
        // var Alert =browser.switchTo().alert();
        // set text to the prompt
        // prompt("admin");
        // Alert.sendKeys("admin");

        // theInternetModules.drop();

        // theInternetModules.checkBoxes();
        // browser.sleep(3000);
        // theInternetModules.broken();
        // browser.sleep(3000);
        // theInternetModules.challenge();
        // browser.sleep(4000);

        // theInternetModules.disppear();
        // browser.sleep(3000);
        // theInternetModules.context();
        // browser.sleep(4000);

        // theInternetModules.dynCont();
        // browser.sleep(4000);

        // theInternetModules.dynControls();
        // browser.sleep(3000);
        // browser.ignoreSynchronization = true;
        //
        // theInternetModules.dynLoading();
        // browser.sleep(5000);

        // theInternetModules.exitIntent();
        // browser.sleep(5000);

        // theInternetModules.fileDownload();
        // browser.sleep(3000);

        // theInternetModules.fileUpload();

        // theInternetModules.forgotPass();
        // browser.sleep(3000);

        // theInternetModules.formAuth();
        // browser.sleep(3000);

        // theInternetModules.horizantalSlider();
        // browser.sleep(4000);

        theInternetModules.frames();
        browser.sleep(4000);









        }) ;




});



