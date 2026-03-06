Feature: Carrinho

  @smoke @cart
  Scenario: Adicionar produto ao carrinho
    Given que estou logado na aplicação
    When adiciono um produto ao carrinho
    Then devo ver o carrinho com 1 item