import homepage from '../pages/HomePage';

const URL = 'https://www.facebook.com/';
const userEmail = 'edsvdtg_zamoreman_1632755764@tfbnw.net';
const password = 'qm285qxg8nw';

fixture`Login Fixture`
    .page(URL)
    .beforeEach(async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.7)
});

test('Should Login Successfully', async t => {
    if (await homepage.RefreshButton.exists && await homepage.RefreshButton.visible)
        await t.click(homepage.RefreshButton);
    
    await t
        .expect(homepage.EmailField.visible).ok()
        .typeText(homepage.EmailField, userEmail)
        .typeText(homepage.PasswordField, password)
        .click(homepage.LoginButton);
});