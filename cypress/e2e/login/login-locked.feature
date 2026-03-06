Feature: Login bloqueado

  @regression
  Scenario: Login com usuário bloqueado
    Given que eu acesso a página de login
    When eu faço login com usuário "locked_out_user" e senha "secret_sauce"
    Then devo ver uma mensagem de erro no login