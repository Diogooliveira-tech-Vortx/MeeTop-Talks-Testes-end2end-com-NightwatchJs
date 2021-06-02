
module.exports = {
    'Dado que pesquiso por Vórtx no google': (browser) => {
        
        let pageGoogle = browser.page.pageGoogle()

        pageGoogle
            .navigate()
            .waitForElementVisible('@telaPesquisa', 1000)
            .assert.visible('@titulo')
            .assert.visible('@inputTexto')
            .setValue('@inputTexto', 'Vórtx')
            .pause(2000)
            .waitForElementVisible('@botaoPesquisa', 1000)
            .click('@botaoPesquisa')
            .assert.containsText('@resultadoPesquisa', 'Vórtx | Tech Based. Dream Powered.')
            .click('@resultadoPesquisa')

    },
    'Quando acesso a sessão TRABALHE CONOSCO no site da Vórtx': (browser) => {
        let pageVortx = browser.page.pageVortx()

        pageVortx
            .assert.visible('@telaVortx')
            .waitForElementVisible('@trabalheConosco', 2000)
            .assert.containsText('@trabalheConosco', '#vemserVórtx')
            .click('@botaoEnviar')
    },
    'Então visualizo a página do kenoby com as vagas disponíveis': (browser) => {

        let pageKenoby = browser.page.pageKenoby()

        browser.windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        });

        pageKenoby
            .waitForElementVisible('@telaDeVagas')
            .assert.containsText('@telaDeVagas', 'VEM SER VÓRTX')
            .pause(2000)
    }

}














































// module.exports = {
//     'Dado que pesquiso por Vórtx no goolgle': (browser) => {

//         let pageGoogle = browser.page.pageGoogle()

//         pageGoogle
//             .navigate()
//             .waitForElementVisible('@telaPesquisa', 1000)
//             .assert.visible('@titulo')
//             .assert.visible('@inputTexto')
//             .setValue('@inputTexto', 'Vórtx')
//             .pause(2000)
//             .waitForElementVisible('@botaoPesquisa', 1000)
//             .click('@botaoPesquisa')
//             .assert.containsText('@resultadoPesquisa', 'Vórtx | Tech Based. Dream Powered.')
//             .click('@resultadoPesquisa')
//     },
//     'Quando acesso a sessão TRABALHE CONOSCO no site da Vórtx': (browser) => {

//         let pageVortx = browser.page.pageVortx()

//         pageVortx
//             .assert.visible('@telaVortx')
//             .waitForElementVisible('@trabalheConosco', 2000)
//             .assert.containsText('@trabalheConosco', '#vemserVórtx')
//             .click('@botaoEnviar')
//     },
//     'Então visualizo a página do kenoby com as vagas diponíveis': (browser) => {

//         let pageKenoby = browser.page.pageKenoby()

//         browser.windowHandles(function (result) {
//             var handle = result.value[1];
//             browser.switchWindow(handle);
//         });

//         pageKenoby

//             .waitForElementVisible('@telaDeVagas')
//             .assert.containsText('@telaDeVagas', 'VEM SER VÓRTX')
//             .pause(2000)
//     }

// };

// ###################

// module.exports = {
//     'Teste': (browser)=> {
//         browser
//             .url('http://www.google.com')
//             .waitForElementVisible('body > div.L3eUgb', 1000)
//             .assert.visible('div .rSk4se .lnXdpd')

//             .assert.visible('input[type=text]')
//             .setValue('input[type=text]', 'Vórtx')
//             .pause(2000)
//             .waitForElementVisible('div .aajZCb div.lJ9FBc > center > input.gNO89b', 1000)
//             .click('div .aajZCb div.lJ9FBc > center > input.gNO89b')
//             .assert.containsText('#rso > div:nth-child(1) > div * .yuRUbf > a > h3', 'Vórtx | Tech Based. Dream Powered.')
//             .click('#rso > div:nth-child(1) > div * .yuRUbf > a > h3')

//             .assert.visible('#logo-vortx')
//             .waitForElementVisible('#trabalhe-conosco > div > h2', 2000)
//             .assert.containsText('#trabalhe-conosco > div > h2', '#vemserVórtx')
//             .click('#trabalhe-conosco > div > a > button > span.MuiButton-label')

//             browser.url('https://jobs.kenoby.com/vortx')
//             .waitForElementVisible('#ckeditor1 > h2')
//             .assert.containsText('#ckeditor1 > h2', 'VEM SER VÓRTX')
//             .pause(2000)
//     }
// }

