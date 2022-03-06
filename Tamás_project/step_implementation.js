/* globals gauge*/
"use strict";
const path = require('path');
const {
    $,
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    hover,
    resizeWindow,
    currentURL,
    goBack,
    to,
    waitFor,
    tap,
    doubleClick,
    button,
    focus,
    scrollTo,
    scrollDown,
    image,
} = require('taiko');
const assert = require("assert");
const { clear } = require('console');
const { isArgumentsObject } = require('util/types');
const headless = process.env.headless_chrome.toLowerCase() === 'true';
const expect = require("chai").expect;
/*beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});*/

/*beforeSuite(async () => {
    await console.log('before suite');
 });
 
 beforeSpec(async () => {
     await console.log('before spec');
 });*/
 /*beforeScenario(async () => {
     await console.log('before scenario');
     
 });*/
 /*beforeStep(async () => {
     await console.log('before step');
 });
 /*afterStep(async () => {
     await console.log('after step');
 });*/
 
 afterScenario(async () => {
     await console.log('after scenario');
     await closeBrowser();
 });
 
 /*afterSpec(async () => {
     await console.log('after spec');
 });*/
 
 /*afterSuite(async () => {
     await console.log('after suite');
     await closeBrowser();
 });*/

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Add task <item>", async (item) => {
    await write(item, into(textBox("What needs to be done?")));
    await press('Enter');
});

step("View <type> tasks", async function (type) {
    await click(link(type));
});

step("Complete tasks <table>", async function (table) {
    for (var row of table.rows) {
        await click(checkBox(toLeftOf(row.cells[0])));
    }
});

step("Clear all tasks", async function () {
    await evaluate(() => localStorage.clear());
});

step("Open todo application", async function () {
    await goto("todo.taiko.dev");
});

step("Must not have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(!await text(row.cells[0]).exists(0, 0));
    }
});

step("Must display <message>", async function (message) {
    assert.ok(await text(message).exists(0, 0));
});

step("Add tasks <table>", async function (table) {
    for (var row of table.rows) {
        await write(row.cells[0]);
        await press('Enter');
    }
});

step("Must have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(await text(row.cells[0]).exists());
    }
});

(step("Login as user", async function() {
    throw 'Nem implementált lépés';
    }));

(step("The search option is set to <arg0>", async function(arg0) {
    throw 'Unimplemented Step';
    }));

(step("Type <arg0> in the search bar", async function(arg0) {
    throw 'Unimplemented Step';
    }));

(step("Verify a dropdow list appears with suggested keyword links", async function() {
    throw 'Unimplemented Step';
    }));

(step("Verify on the right side of the dropdown suggested items are shown", async function() {
    throw 'Unimplemented Step';
    }));    

(step("Clear search bar", async function() {
    throw 'Unimplemented Step';
    }));

(step("Hover over product image", async function() {
    throw 'Unimplemented Step';
    }));

(step("Verify shopping cart button/icon", async function() {
    throw 'Unimplemented Step';
    }));

(step("Click on the shopping cart button", async function() {
    throw 'Unimplemented Step';
    }));
    
(step("Verify message appearing with item in shopping chart", async function() {
    throw 'Unimplemented Step';
    }));

step("Open <page> with headless mode <isheadless>", {continueOnFailure : true} , async function(page, isheadless) {
    var headlessParam = isheadless.toLowerCase() === 'true';
    await openBrowser({headless: headlessParam, args: ["--start-fullscreen"]});                  // openBrowser({args: ["--start-fullscreen"]})
    await goto(page);
    var currentUrl = await currentURL();
    expect(currentUrl).to.contain(page);
    });
    
step("Click on Documention button", async function() {
    await click("Documentation");
    });    

step("Click on search input", async function() {
    await click($(`#search`));
    });    

step("Click on error", async function() {
    /*try{
    
     await click($(`error`))
    }catch(e){
        console.log('Az error gomb nem található');
        
    }*/
    });
    

step("Hover on Blog button", async function() {
	await hover($(`.link_examples`));
});




step("Write <searchParam> in the search field", async function(searchParam) {
	await write(searchParam, $(`#search`));
});

step("Press Enter", async function() {
	await press('Enter');
});

step("Find Plugins nav item", async function() {
    var pluginsListItem = await listItem('Plugins');
    console.log(await pluginsListItem.attribute('class'));
    if (pluginsListItem.isVisible == true) {
        await click($(`.link_plugins`));
    }
	
});


step("Click on Bejelentkezés", async function() {
    await resizeWindow({width:640, height:930});
	var loginBtn = await $(`[class="fas fa-user site-sub-nav__icon"]`);
    var hamburgerMenu = await $(`.hamburger-box`);
    var megjelentALogin = await hamburgerMenu.isVisible();
    if (megjelentALogin==true) {
        await click(hamburgerMenu);
        
    }else{
        await click($(`a[href='/belepes']`));
        await click(loginBtn);
    }
    
});



step("Write out category names", {continueOnFailure : true}, async function() {
    let categoryList = await link({class:'home-shop-categories__card__link'}).elements();
    try{
    expect(categoryList[0].text()).to.equal("Gépösszerakó");
    }catch(e){
        console.log(e);
    }
    expect(categoryList).to.have.lengthOf(10);
    /*assert.strictEqual(categoryList[1].text()).to.equal("Notebook");
   /* expect(categoryList[1].text() == "Notebook").to.be.ok;

    

   

   /* for (let category of categoryList) {

        let szoveg = await category.text();

        console.log(await link(szoveg).attribute('href'));

    }*/

});

step("Menu category check", async function() {
   let menulist = await listItem({class:"site-nav__item"}).elements();
    expect(await menulist[0].text()).to.equal("Shop");
	expect(await menulist[0].text()).to.be.a("String");
});

//git clone

//git add
//git commt -m "ez az.."
//git push

step("Open the product page", async function() {
	await click($(`div>a[href*="/4958"]`));
    //await click(link('SAMSUNG T220 Galaxy Tab A7 Lite 8.7" 32GB WiFi szürke'));
    //waitFor(async () => !(await $('a[href*="szurke/1925626"]').exists()));
    await focus($(`a[href*="szurke/1925626"][class="shop-card__overlay-link"]`));
    await click($(`a[href*="szurke/1925626"][class="shop-card__overlay-link"]`));
});

step("Click on silver color button", async function() {
	await click($(`a[title="Ezüst"]`));
    
});

step("Click one of the pictures in the side galery", async function() {
	await click($(`div>img[src*="1650412"]`));

});

step("Click on the <arg0> extension button", async function(arg0) {
	await scrollDown(1000);
    await focus($(`div>i[class*="product__link__icon fas fa-arrow-down"]`));
    await click($(`div>i[class*="product__link__icon fas fa-arrow-down"]`));
    await waitFor(2000);
    await click($(`div>i[class*="product__link__icon fas fa-arrow-down"]`));
});



step("Navigate to project page", async function() {
	
});

step("Click on the <arg0> underline button", async function(arg0) {
	await click($(`a.product__link.product__link--underlined`));
    await waitFor(3000);
});

step("Click <arg0> button", async function(arg0) {
	await click($(`a[href="#velemenyek"]`));
    await waitFor(3000);
});

step("Click on the bold <arg0> button", async function(arg0) {
	await click($(`.product__subscription>a[href="#"]`));
    await waitFor(3000);
});

step("Close pop-up", async function() {
	//await focus($(`i[class="material-icon"]`));
    await click($(`i[class="material-icon"]`));
});

step("Add <arg0> year guarantee", async function(arg0) {
	await click($(`//*[@id="app"]/div[1]/main/section[2]/div/div/div/div[3]/div[3]/div/div[2]/div/div[2]/div/div/ul/li[1]/div/label/span`));
});

step("Pop-up will displayed", async function() {
	await waitFor(3000);
    await click($(`#checkout-related-products-popup>div>div>div>button>i[class="fas fa-times"]`));
    var popup = await ($(`#checkout-related-products-popup>div>div`)).isVisible();
    expect(popup).to.be.true;
});

step("Click on Green basket", async function() {
    
	await click($(`button[class*="u-hide@mobile"]`));
    await waitFor($(`#checkout-related-products-popup button.button`));
});

step("Click on the <arg0> button", async function(arg0) {
	await click($(`span.action-link__state.js-state--not-saved.is-active`));
    await waitFor(3000);
});

step("Close Login pop-up", async function() {
	await click($(`//*[@id="profile-login-popup"]/div/div/div[1]/button/i`));
});



step("Click on the Tovább button", async function() {
    await focus($(`#checkout-related-products-popup button.button`));
    await click($(`#checkout-related-products-popup button.button`));
    await waitFor(3000);
	/*var lathato = await $(`button[class="button button--lg button--secondary button--fluid"]`).isVisible();
    var gomb = await click($(`button[class="button button--lg button--secondary button--fluid"]`));
    if(lathato === true){
        await click('Tovább', {waitForEvents:['DOMContentLoaded']});
        //await focus(button(gomb));
        //await waitFor(`button[class="button button--lg button--secondary button--fluid"]`);
        //await click(gomb);
        assert (await $(`div[class="basket-card__content"]`).isVisible());
    }*/
    
    
});

step("We click on the quantity input field", async function() {
	await doubleClick($(`div[class="shop-to-cart-quantity u-hide@mobile"]>input[class="shop-to-cart-quantity__input"]`));
});



step("Typeing <numberofq> quantity", async function(numberofq) {
	await write (numberofq, $(`div[class="shop-to-cart-quantity u-hide@mobile"]>input[class="shop-to-cart-quantity__input"]`));

});

step("Clicking out the field", async function() {
	await tap($('[class="overlay js-overlay overlay--menu is-visible"]'));
    await waitFor(3000);
});

step("Click on the chart", async function() {
	await hover($(`a[title="Kosár"]`));
    await click($(`a[title="Kosár"]`));
    waitFor(5000);
});

step("We click on the <hitel> button", async function(hitel) {
	await click($(`i[class="fas fa-sliders-h button__icon"]`));
    await waitFor(5000);
});

step("We are click on the main picture of the product", async function() {
	await click($(`#slick-slide40`)); 
    await waitFor(3000);
    //await click($(`div[class="modal-dialog modal-gallery"]>div>div>button`));
});

step("We click on the Értesítés kérek button", async function() {
    await scrollDown(800);
    //await scrollTo('Értesítést kérek');
    //await click('Értesítést kérek');
    //await scrollTo(`button[class*="product-pricegraph"]>span`);
	await click($(`button[class*="product-pricegraph"]>span`));
    //await focus($(`//*[@id="price-watcher-popup"]/div/div/div[1]/button`));
    //await click($(`//*[@id="price-watcher-popup"]/div/div/div[1]/button`));
});

step("We navigate the cursor in to the price graphic chart", async function() {
	await scrollDown(800);
    await hover($(`div>.chartjs-render-monitor`));
    
});

step("Click on the carousel right arrow", async function() {
    await scrollDown(1500);
	await click($(`i[class="fas fa-arrow-right shop-scroll__scroll-btn-icon"]`));
    await waitFor(3000);
});

step("We scroll down", async function() {
	await scrollDown(1500);
});

step("A product header will drop down", async function() {
	await focus($(`.product-sticky__content`));
    var header = await $(`.product-sticky__content`).isVisible();
    expect(header).to.be.true;
});

step("Scroll down and click the button", async function() {
	await scrollDown(2500);
    await click($(`a[class="site-footer__back-to-top-link js-site-footer-back-to-top-link"]`));
    await waitFor(3000);
    expect (await $(`a[class="site-footer__back-to-top-link js-site-footer-back-to-top-link"]`).exists());

});

step("We move the cursor to the <label> i icon", async function(label) {
    await scrollDown(800);
    await waitFor(2000);
	await focus($(`//*[@id="specifikacio"]/div/div[2]/div[1]/table/tbody/tr[9]/td[1]/i`));
    await click($(`//*[@id="specifikacio"]/div/div[2]/div[1]/table/tbody/tr[9]/td[1]/i`));
    //await hover($(`//*[@id="specifikacio"]/div/div[2]/div[1]/table/tbody/tr[9]/td[1]/i`));
    
});

step("The page jumps to the silvered color product page", async function() {
	var expectedtitle = 'SAMSUNG T220 Galaxy Tab A7 Lite 8.7" 32GB WiFi ezüst';
    var actualtitle = await $(`h1.product__title`).text();
    expect(actualtitle).to.equal(expectedtitle);
});

step("The selected picture will be displayed in large in the main galery", async function() {
	//expect (await $(`#slick-slide41 a img`).exists());
    var mn = await $(`#slick-slide41 a img`).isVisible();
    //var main = await (image ({id:'slick-slide81 img[class="product-gallery__image image-fit"]'}).exists());
    expect(main).to.be.true;
    
});

step("All the product specification will be displayed", async function() {
	//expect (await $(`div[class="product-box__accordion open"]`).isVisible()).to.be.equal(true);
    var specslist = await $(`[class="product-table__tr"]`).elements();
    var darab = 18;
    expect (specslist).to.have.lengthOf(darab);
});

step("The page will be scroll down to the details section", async function() {
	var details = await $(`[class="layout-box--gap"] p`).text();
    var text = '8.7"-os android táblagép 32 GB tárhellyel.';
    expect(details).to.have.string(text);
});

step("The page will scroll down to the ratting section", async function() {
	expect (await $(`.product-box__accordion__content.product-reviews-header`).exists()).to.be.true;
});

step("A pop-up will appear with the subcription information", async function() {
	var expectedtitle = 'Regisztráció és előfizetés';
    var actualtitle = await $(`#subscription-popup h4:first-child`).text();
    expect(actualtitle).to.equal(expectedtitle);
    expect (await $(`form[name="subscription"]`).exists()).to.be.true;
    expect (await $ (`div[class="form-buttons"] button span `).exists()).to.be.true;
});

step("The related text will be displayed on the right side of the price", async function() {
    var expectedtitle = '+1 év iPon kiterjesztett garancia (7 643 Ft)';
    var actualtitle = await $(`div[class="product__price-wrapper u-hide@mobile"] span`).text();
    expect(actualtitle).to.equal(expectedtitle);
    
});

step("The login pop-up will displayed", async function() {
	var popup = await $(`#profile-login-popup [class="modal-content"]`).exists();
    expect(popup).to.be.true;
});

step("A chart content side bar will be shown up in the right side with the selected product", async function() {
    var product = await $(`aside [class="basket-card__content"]`).exists();
    expect(product).to.be.true;
});

step("The quantity will be changed to one.", async function() {
    await focus($(`div[class="shop-to-cart-quantity u-hide@mobile"]>input[class="shop-to-cart-quantity__input"]`));
    //var expectedtitle = 1;
    //var actualtitle = await $(`div[class="shop-to-cart-quantity u-hide@mobile"]>input`).elements();
    //expect(actualtitle).to.be.equal(expectedtitle);
    //expect (await $(`div[class="shop-to-cart-quantity u-hide@mobile"]>input[class="shop-to-cart-quantity__input"]`).exists());
});

step("The product card will be shown in it", async function() {
	;
});

step("Pop-up will displayed with specific credit information", async function() {
	var credit =await $(`form[class="req01-calculator__box req01-calculator__calculation content-box"]`).exists();
    expect(credit).to.be.true;
});

step("A large pop-up carousel will appear with the product large pictures", async function() {
	var carousel = await $(`#splide02-list`).exists();
    var picture = await $(`#splide01-list li img`).isVisible();
    expect(carousel).to.be.exist;
    expect(picture).to.be.true;
});

step("A pop-up will be displayed with email input field", async function() {
	//var expectedtitle = "Add meg az e-mail címed, amin értesíteni tudunk";
    //var actualtitle = await $(`#price-watcher-popup h5.modal-title`).text();
	//expect(actualtitle).to.equal(expectedtitle);
    var emailfield = await $(`#price_watcher_email`).exists();
    expect(emailfield).to.be.true;
});

step("The price will displayed on the chart", async function() {
	var pricegraph = await $(`[class="layout-box product-pricegraph__layout-box"] .product-pricegraph__chart`).isVisible();
    expect(pricegraph).to.be.true;
});

step("Six new products product will be shown", async function() {
	var carouselList = await $(`.shop-scroll__item.u-content-card-hover.slick-slide.slick-active`).elements();
    expect(carouselList).to.have.lengthOf(12);
    //expect (await $(`.product-section .shop-scroll .slick-track .shop-scroll__item.u-content-card-hover.slick-slide`).isVisible());
});

step("A tooltip will appear with specification information", async function() {
	var tooltip = await $(`//*[@id="specifikacio"]/div/div[2]/div[1]/table/tbody/tr[9]/td[1]/i`).isVisible();
    expect (tooltip).to.be.true;
});

step("Click out the field", async function() {
	await tap($(`h1.product__title`));
});


step("Search for tablet", async function() {
	await click($(`div#search`));
    await write('tablet');
    await press ('Enter');
});

step("Click second product", async function() {
	await click ($(`#img6731091`));
    var expectedtitle = "iPad mini 64 GB Asztroszürke 2021";
    var actualtitle = await $(`h1[itemprop="name"]`).text();
    var ar = await $(`.price_withVat`).isVisible();
    expect(ar).to.equal(true);
	expect(actualtitle).to.equal(expectedtitle);
});

step("Expect 227 product", async function() {
	var termek= expect (await $(`.numberItem`).text());
    expect(termek).to.equal('227');

});

step("Click on Basket button", async function() {
	await click ($(`a[class="btnx normal green buy single"]`));
});

step("And a submit button", async function() {
	var button = await $(`form button span[class="button__text"]`).text();
    var button__text = "ELŐFIZETÉS";
    expect(button).to.have.string(button__text);
});

step("And a x close button on the top right corner", async function() {
	var delbutton = await $(`div[class="product__price-wrapper u-hide@mobile"] a>i[class="fas fa-times"]`).exists();
    expect(delbutton).to.be.true;
});

step("And the extended guarantee card with the radio buttons will be displayed", async function() {
	var guarantee = await $(`div[class*="product-main"] [class="tab-content"]`).exists();
    expect(guarantee).to.be.true;
});

step("The checkout button will displayed", async function() {
	var button = await $(`a[href="/shop/checkout"] span[class="button__text"]`).text();
    expect(button).to.have.string("MEGVESZEM");
});

step("The <arg0> button will shown", async function(arg0) {
	var delbutton = await $(`a.basket__delete-all-link`).exists();
    var teljeskosar = await $(`.basket__full-link`).exists();
    expect(delbutton,teljeskosar).to.exist;
});

step("And price input field", async function() {
	var price = await $(`#price_watcher_price`).exists();
    expect(price).to.be.true;
});

step("And a <arg0> submit button", async function(arg0) {
	var subbutton = await $(`#price-watcher-popup .form-buttons>[type="submit"]`).exists();
    expect(subbutton).to.be.true;
});

step("And an x close button in the top right corner of the pop-up", async function() {
	await focus($(`//*[@id="price-watcher-popup"]/div/div/div[1]/button`));
    var xbutton = await $(`//*[@id="price-watcher-popup"]/div/div/div[1]/button`).exists();
    expect(xbutton).to.be.true;
});

step("And the product will be displayed", async function() {
	var expectedtitle = 'SAMSUNG T220 Galaxy Tab A7 Lite 8.7" 32GB WiFi szürke';
    var actualtitle = await $(`h1.product-sticky__title`).text();
    expect(actualtitle).to.be.equal(expectedtitle);
});

step("And the product page section titles will be displayed", async function() {
	//var sections = await listItem({class:'.product-sticky__nav__item'}).elements();
    //var elements = await $(`a[href="#fotok"]`);
    //expect(sections[0]).to.include(elements);
    var sections = await $(`.product-sticky__nav.js-subnav`).isVisible();
    expect(sections).to.be.true;
});

step("The page will scroll to the top", async function() {
	var header = await $(`#app>[class*="site-header"] `).isVisible();
    expect(header).to.be.true;
});