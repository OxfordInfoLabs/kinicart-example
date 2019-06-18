describe('Test Authentication from Guest Web Service', function () {

    it("Should get no session data back when logged out", function () {

        // Logout
        browser.get("/guest/auth/logout");

        // Check session is nullified
        browser.get("/guest/session");
        expect(pageContent()).toEqual({user: null, account: null})
    });

    it("Should be able to log in correctly and get session back", function () {
        browser.get("/guest/auth/login?emailAddress=sam@samdavisdesign.co.uk&password=password");
        expect(pageContent()).toEqual(1);
        browser.get("/guest/session");
        pageContent().then(result => {
            expect(result.user.name).toEqual("Sam Davis");
            expect(result.user.mobileNumber).toEqual("07891 147676");
            expect(result.account.name).toEqual("Sam Davis Design");
        });


        // Check reset state again.
        browser.get("/guest/auth/logout");

        // Check session is nullified
        browser.get("/guest/session");
        expect(pageContent()).toEqual({user: null, account: null})

    });

});


// Page content function
function pageContent() {
    return new Promise((resolve) => {
        element(by.tagName('pre')).getText().then(text => {
            resolve(JSON.parse(text));
        });
    });
}
