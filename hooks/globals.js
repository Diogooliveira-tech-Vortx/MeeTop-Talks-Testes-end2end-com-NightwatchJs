module.exports = {
    beforeEach: function(browser, done) {
        browser.resizeWindow(1920, 1080)
        done()
    },

    afterEach: function (browser, done) {
        browser.end()
        done()
    },
};

// ganchos que podemos usar através das funções beforeEach e afterEach, 
// por meio deles podemos customizar os teste e colocar códigos comuns no cenários.

// before = antes de cada steps
// after = depois de todos os steps
// beforeEach = antes de cada step
// afterEach = antes de cada step
