import { Selector,t} from 'testcafe';

class RegistrationPage{
  constructor() {
    this.RefreshButton = Selector('.fcb > a');
    this.RegistrationButton = Selector("a[data-testid='open-registration-form-button']");
    this.NameField = Selector("input").withAttribute('name', 'firstname');
    this.LastnameField = Selector("input").withAttribute('name', 'lastname');
    this.EmailField = Selector("input").withAttribute('name', 'reg_email__');
    this.EmailConfirmationField = Selector("input[name='reg_email_confirmation__']");
    this.PasswordField = Selector("input[name='reg_passwd__']");
    this.BirthDayList = Selector("select[name='birthday_day']");
    this.BirthMonthList = Selector("select[name='birthday_month']");
    this.BirthYearList = Selector("select[name='birthday_year']");
    this.GenderOption =  Selector("span[data-name='gender_wrapper']").child(0);
    this.RegisterButton = Selector("button[name='websubmit']");
  }

  async selectDay(day){
    const DaysOption = this.BirthDayList.find('option');
    await t
      .click(this.BirthDayList)
      .click(DaysOption.withText(day));
  }

  async selectMonth(month){
    const DaysOption = this.BirthMonthList.find('option');
    await t
      .click(this.BirthMonthList)
      .click(DaysOption.withText(month));
  }

  async selectYear(year){
    const DaysOption = this.BirthYearList.find('option');
    await t
      .click(this.BirthYearList)
      .click(DaysOption.withText(year));
  }
}
export default new RegistrationPage();