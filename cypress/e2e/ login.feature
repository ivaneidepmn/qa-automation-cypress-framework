Feature: Login

  Scenario: Login com sucesso
    Given que eu acesso a página de login
    When eu faço login com usuário "standard_user" e senha "secret_sauce"
    Then devo ver a página de produtos