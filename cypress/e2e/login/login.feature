Feature: Login

  @smoke
  Scenario: Login com sucesso
    Given que eu acesso a página de login
    When eu faço login com usuário "standard_user" e senha "secret_sauce"
    Then devo ver a página de produtos

  @regression
  Scenario: Login com senha inválida
    Given que eu acesso a página de login
    When eu faço login com usuário "standard_user" e senha "senha_errada"
    Then devo ver uma mensagem de erro no login

  @regression
  Scenario: Login com usuário bloqueado
    Given que eu acesso a página de login
    When eu faço login com usuário "locked_out_user" e senha "secret_sauce"
    Then devo ver uma mensagem de erro no login