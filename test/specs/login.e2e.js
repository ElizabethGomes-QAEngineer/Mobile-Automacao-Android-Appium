import userData from '../data/userData.json'
import { expect, $ } from '@wdio/globals'
import MenuScreen from '../screen/menuScreen.js'
import LoginScreen from '../screen/loginScreen.js'

describe('My Login application', () => {

      it('should login with invalid credentials', async () => {
           
          await MenuScreen.acessLoginScreen()
          await LoginScreen.fillLoginForm(userData.userFail.username,userData.userFail.password)
          await expect($(LoginScreen.erroMessage)).toHaveText("Provided credentials do not match any user in this service.")
      })
     
      it('login with Sucess', async () => {

          await MenuScreen.acessLoginScreen()
          await LoginScreen.fillLoginForm(userData.userSuccess.username,userData.userSuccess.password)
      })

})

