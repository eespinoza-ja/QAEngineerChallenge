import registrationpage from '../pages/RegistrationPage';

const URL = 'https://www.facebook.com/';
const name = "Betty";
const lastname = "AAAA";
const userEmail = 'edsvdtg_zamoreman_1632755764@tfbnw.net';
const password = 'qm285qxg8nw';

fixture`Registration Fixture`
    .page(URL)
    .beforeEach(async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.7)
});

test('Should Register Successfuly', async t => {
    if (await registrationpage.RefreshButton.exists && await registrationpage.RefreshButton.visible)
        await t.click(registrationpage.RefreshButton);
    
    await t
        .click(registrationpage.RegistrationButton)
        .typeText(registrationpage.NameField, name)
        .typeText(registrationpage.LastnameField, lastname)
        .typeText(registrationpage.EmailField, userEmail)
        .typeText(registrationpage.EmailConfirmationField, userEmail)
        .typeText(registrationpage.PasswordField, password);
    await registrationpage.selectDay('5');
    await registrationpage.selectMonth('nov');
    await registrationpage.selectYear('1983');
    await t
        .click(registrationpage.GenderOption)
        .click(registrationpage.RegisterButton);
});