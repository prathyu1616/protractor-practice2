
var internetLocators = require('../internetExamplesLocators/theInternetExamplesLocators');


var internetModules={

        // toLink:function(){
        //     element(internetLocators.LINK).click();
        //     browser.get('http://admin:admin@the-internet.herokuapp.com/basic_auth');
        // },
        // drop:function(){
        //     element(internetLocators.DROPDOWN).click();
        //     element(internetLocators.DLIST).click();
        //     var allOptions=element.all(internetLocators.OPTIONS);
        //     expect(allOptions.count()).toEqual(3);
        //     var firstOption = allOptions.get(2).click();
        //     expect(firstOption.getText()).toEqual('Option 1');
        // },
        // checkBoxes:function(){
        //         element(internetLocators.CHECK).click();
        //         var che = element(by.id('checkboxes'));
        //     expect(che.isSelected()).toBe(false);
        //     che.click();
        //     expect(che.isSelected()).toBe(false);
        //     che.click();
        // broken:function(){
        //     element(internetLocators.BROKEN).click();
        //
        //
        // }
        //     challenge:function(){
        //         element(internetLocators.CHALLENGE).click();
        //         var x=element(internetLocators.BUTTON).click();
        //         var y=element(internetLocators.BUTTON2).click();
        //         var z= element(internetLocators.BUTTON3).click();
        //         browser.sleep(4000);
        //         element(internetLocators.CANVAS);
        //         expect(x.isSelected()).toBe(false);
        //         expect(y.isSelected()).toBe(false);
        //
        //     },
        //     disppear:function(){
        //         element(internetLocators.DISAPP).click();
        //         //element(internetLocators.DISAPPEAR1).click();
        //         element(internetLocators.DISAPP2).click();
//         context:function(){
//             element(internetLocators.CONTEXT).click();
//            var x = element(internetLocators.CONTEXTMENU);
//              var y = element(internetLocators.CONTMENU);
//     browser.driver.actions().dragAndDrop(x,y).mouseUp().perform();
// //
//             // browser.executeScript(dragAndDrop, x.getWebElement(), y.getWebElement());
//             // browser.sleep(2000)
//
// .mouseDown(x).mouseMove(y).mouseUp().perform();
//             browser.sleep(10000);
//
//             // browser.actions().mouseDown(x).perform();
//             // browser.actions().mouseMove({x:0, y:100}).perform();
//             // browser.actions().mouseDown(x).perform();
//             // browser.actions().mouseMove({x:0, y:75}).perform();
//             // browser.actions().mouseUp().perform();
//
//         dynCont:function(){
//             element(internetLocators.DYN).click();
//             element(internetLocators.DYNM).click();
//
//         },

            // dynControls:function () {
            //
            //     element(internetLocators.DYNMC).click();
            //    // element(internetLocators.DYNC).click();
            //     element(internetLocators.DYNCHECK).click();
            //     browser.sleep(3000);
            //
            // }
        //
        // dynLoading:function(){
        //
        //     element(internetLocators.DYNLOAD).click();
        //     element(internetLocators.DYNL).click();
        //     browser.sleep(5000);
        //     element(internetLocators.DYNBUTTON).click();
        //    // browser.sleep(7000);
        //     browser.getTitle().then(function (text) {
        //         console.log(text);
        //     });
        //
        //     var EC = protractor.ExpectedConditions;
        //     browser.wait(EC.elementToBeClickable(element(internetLocators.DYNBUTTON)), 10000);
        // },

            // exitIntent:function(){
            //
            //     element(internetLocators.EXIT).click();
            //     element(internetLocators.EXITIN).click();
            //     browser.sleep(3000);
            // }

         // fileDownload:function(){
    //     element(internetLocators.FILED).click();
    //     element(internetLocators.FILEDO).click();
    //
    // }
    //     fileUpload:function(){
    //         element(internetLocators.FILEU).click();
    //         element(internetLocators.FILEUP).click();
    //         element(internetLocators.FILEUPLOAD).click();
    //     }
    //
    //     forgotPass:function(){
    //         element(internetLocators.FORGOT).click();
    //         element(internetLocators.EMAIL).sendKeys("prathyushaburam97@gmail.com");
    //         element(internetLocators.BUTTON).click();
    //     }


        // formAuth:function(){
        //     element(internetLocators.FORMAUTH).click();
        //     element(internetLocators.FORMUSER).sendKeys('tomsmith');
        //     element(internetLocators.FORMPASS).sendKeys('SuperSecretPassword!');
        //     element(internetLocators.FORMBUTTON).click();
        //     element(internetLocators.FORMBUTT).click();


        // horizantalSlider:function(){
        //     element(internetLocators.HORIZANTAL).click();
        //    var x = element(internetLocators.SLIDER);
        //    // browser.wait('window.scrollTo(0.0,5.0);');
        //     browser.executeScript("arguments[0].scrollIntoView();", x.getWebElement() );
        //     browser.sleep(2000);
        //     x.click();


           // browser.actions().dragAndDrop(x, {x:0.0, y:5.0}).perform();

    frames:function(){
        browser.sleep(2000);
        element(internetLocators.FRAMES).click();
        browser.sleep(2000);
        element(internetLocators.FRAMESN).click();
        browser.sleep(2000);
       // var x = element(internetLocators.FRAMESNES);
        browser.switchTo().frame(element(internetLocators.FRAMESNESTED).getWebElement());
        browser.sleep(4000);

       var x = element(internetLocators.FRAMEMMIDDLE);
       // x.getAttribute('content').then(function(na)
       //  {
       //      console.log(na);
       //  });

        expect(x.getText()).toBe('MIDDLE');




        },

    }
module.exports=internetModules;