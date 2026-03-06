Feature: Login

  @smoke @login
  Scenario: Login com sucesso
    Given que eu acesso a página de login
    When eu faço login com usuário "standard_user" e senha "secret_sauce"
    Then devo ver a página de produtos

  @regression @login
  Scenario: Login com senha inválida
    Given que eu acesso a página de login
    When eu faço login com usuário "standard_user" e senha "senha_errada"
    Then devo ver uma mensagem de erro no login