import { Selector,t} from 'testcafe';

class HomePage{
  constructor() {
    this.EmailField = Selector('input#email');
    this.PasswordField = Selector('input#pass');
    this.LoginButton = Selector("button[data-testid='royal_login_button']");
    this.RefreshButton = Selector('.fcb > a');
  }
}
export default new HomePage();