const products = [
    {title:"Acrilico display alfa numerico", path:"./img/Acrilico_display_alfa_numerico.jpg"},
    {title:"Bateria 3v interna 2032", path:"./img/Bateria_3v_interna_2032.jpg"},
    {title:"Bateria 3v interna 2450", path:"./img/Bateria_3v_interna_2450.jpg"},
    {title:"Bala do solenoide da catraca", path:"./img/Bala_do_solenoide_da_catraca.jpg"},
    {title:"Bateria 12v 1.3ah", path:"./img/Bateria_12v_1.3Ah.jpg"},
    {title:"Bateria 12v 7ah", path:"./img/Bateria_12v_7Ah.jpg"},
    {title:"Bateria NoBreak iDClass", path:"./img/Bateria_No-Break_iDClass.jpg"},
    {title:"Bateria NoBreak Prisma/Hexa ADV", path:"./img/Bateria_No-Break_Prisma-Hexa_ADV.jpg"},
    {title:"Botoeira sem fio", path:"./img/Botoeira_sem_fio.jpg"},
    {title:"Botoeira Agl", path:"./img/Botoeira_Agl.jpg"},
    {title:"Botoeira Amelco", path:"./img/Botoeira_Amelco.jpg"},
    {title:"Botoeira game", path:"./img/Botoeira_game.jpg"},
    {title:"Botoeira Yale", path:"./img/Botoeira_Yale.jpg"},
    {title:"Botoeira touch", path:"./img/Botoeira_touch.jpg"},   
    {title:"Botoeira inox sobrepor", path:"./img/Botoeira_inox_sobrepor.jpg"},
    {title:"Botao do Plus", path:"./img/Botao_do_Plus.jpg"},
    {title:"Bucha do eixo estriado", path:"./img/Bucha_do_eixo_estriado.jpg"},
    {title:"Caneta iDClass", path:"./img/Caneta_iDClass.jpg"},
    {title:"Cabo de alimentação de bateria", path:"./img/Cabo_de_alimentação_de_bateria.jpg"},
    {title:"Cabo do sensor da catraca", path:"./img/Cabo_do_sensor_da_catraca.jpg"},
    {title:"Cabo Fonte NOBREAK", path:"./img/cabo_Fonte_NOBREAK.jpg"},    
    {title:"Cabo comunicação impressora", path:"./img/Cabo_comunicação_impressora.jpg"},
    {title:"Cabo força 2 pinos", path:"./img/Cabo_força_2_pinos.jpg"},
    {title:"Cabo comunicação prot 2", path:"./img/Cabo_comunicação_prot_2.jpg"},
    {title:"Cabeamento sensor plus", path:"./img/Cabeamento_sensor_plus.jpg"},
    {title:"Cabeça de impressão plus", path:"./img/Cabeça_de_impressão_plus.jpg"},
    {title:"Cabo catraca iDBlock", path:"./img/cabo_catraca_iDBlock.jpg"},
    {title:"Catraca impressora do  Plus", path:"./img/Catraca_impressora_do_Plus.jpg"},
    {title:"Cabo flat v1 iDBlock", path:"./img/Cabo_flat_v1_iDBlock.jpg"},
    {title:"Cabo Flat v2 iDBlock", path:"./img/Cabo_Flat_v2_iDBlock.jpg"},
    {title:"Carro de transporte do plus", path:"./img/carro_de_transporte_do_plus.jpg"},
    {title:"Cartucho", path:"./img/Cartucho.jpg"},
    {title:"Chave iDClass", path:"./img/Chave_iDClass.jpg"},
    {title:"Chave liga e desliga Plus e prot", path:"./img/Chave_liga_e_desliga_Plus_e_prot.jpg"},
    {title:"Chaveiro de proximidade", path:"./img/Chaveiro_de_proximidade.jpg"},
    {title:"Conj sensor montado da catraca", path:"./img/conj_sensor_montado_da_catraca.jpg"},
    {title:"Conta Giro", path:"./img/Conta_Giro.jpg"},
    {title:"Conector", path:"./img/Conector.jpg"},
    {title:"Conversor de proximidade iDFlex", path:"./img/Conversor_de_proximidade_iDFlex.jpg"},
    {title:"Controle remoto Botoeira s/ fio", path:"./img/Controle_remoto_Botoeira_s_fio.jpg"},
    {title:"Chicote instalação iDFlex", path:"./img/Chicote_instalação_iDFlex.jpg"},
    {title:"Display iDClass", path:"./img/Display_iDClass.jpg"},
    {title:"Display Vega", path:"./img/Display_Vega.jpg"},
    {title:"Display Grafico Lumem", path:"./img/Display_Grafico_Lumem.jpg"},
    {title:"Display Catraca iDBlock", path:"./img/Display_Catraca_iDBlock.jpg"},
    {title:"Etiqueta do Plus", path:"./img/Etiqueta_do_Plus.jpg"},
    {title:"Etiqueta display catraca", path:"./img/Etiqueta_display_catraca.jpg"},
    {title:"Eixo de comando Liso", path:"./img/Eixo_de_comando_Liso.jpg"},
    {title:"Eixo de comando estriado", path:"./img/Eixo_de_comando_estriado.jpg"},
    {title:"Engrenagem do eixo de comando", path:"./img/Engrenagem_do_eixo_de_comando.jpg"},
    {title:"Engrenagem intermediaria Plus", path:"./img/Engrenagem_intermediaria_Plus.jpg"},
    {title:"Fechadura", path:"./img/Fechadura.jpg"},
    {title:"Fecho eletrico", path:"./img/Fecho_eletrico.jpg"},
    {title:"Guia do cabeçote Plus", path:"./img/Guia_do_cabeçote_Plus.jpg"},
    {title:"Ibutton", path:"./img/Ibutton.jpg"},
    {title:"Impressora Prisma", path:"./img/Impressora_Prisma.jpg"},
    {title:"Impressora Vega", path:"./img/Impressora_Vega.jpg"},
    {title:"Impressora iDClass", path:"./img/Impressora_iDClass.jpg"},
    {title:"Impressora Hexa", path:"./img/Impressora_Hexa.jpg"},
    {title:"Lacre henry", path:"./img/Lacre_henry.jpg"},
    {title:"Leitor biometrico ControliD", path:"./img/Leitor_biometrico_controlid.jpg"},
    {title:"Leitora de proximidade", path:"./img/Leitora_de_proximidade.jpg"},
    {title:"Leitor de cartao de proximidade", path:"./img/Leitor_de_cartao_de_proximidade.jpg"},
    {title:"Leitor codigo de barras Henry", path:"./img/Leitor_codigo_de_barras_Henry.jpg"},
    {title:"Lacre massistec", path:"./img/Lacre_massistec.jpg"},
    {title:"Leitora de proximidade MIFARE", path:"./img/Leitora_de_proximidade_MIFARE.jpg"},
    {title:"Leitor de proximidade iDClass", path:"./img/Leitor_de_proximidade_iDClass.jpg"},
    {title:"Motor Plus", path:"./img/Motor_Plus.jpg"},
    {title:"Modulo Boimetrico henry", path:"./img/Modulo_Boimetrico_henry.jpg"},
    {title:"Mecanismo Cofre catraca", path:"./img/Mecanismo_Cofre_catraca.jpg"},
    {title:"Membrana Teclado Hexa", path:"./img/Membrana_Teclado_Hexa.jpg"},
    {title:"Membrana teclado Prisma", path:"./img/Membrana_teclado_Prisma.jpg"},
    {title:"Membrana teclado Orion", path:"./img/Membrana_teclado_Orion.jpg"},
    {title:"Membrana teclado catraca", path:"./img/Membrana_teclado_catraca.jpg"},
    {title:"Motor Puxador de Cartao Vega", path:"./img/Motor_Puxador_de_Cartao_Vega.jpg"},
    {title:"Pinhao 4 dentes", path:"./img/Pinhao_4_dentes.jpg"},
    {title:"Pinhao 8 dentes", path:"./img/Pinhao_8_dentes.jpg"},
    {title:"Placa extensora USB", path:"./img/placa_extensora_USB.jpg"},
    {title:"Ponteira cabeça de impressao Plus", path:"./img/Ponteira_cabeca_de_impressao_Plus.jpg"},
    {title:"Placa iDBlock v2", path:"./img/Placa_iDBlock_v2.jpg"},
    {title:"Plastico da placa do plus", path:"./img/Plastico_da_placa_do_plus.jpg"},
    {title:"Placa principal plus 17 k", path:"./img/Placa_principal_plus_17_k.jpg"},
    {title:"Placa de catraca SF", path:"./img/Placa_de_catraca_SF.jpg"},
    {title:"Placa extensora Prisma", path:"./img/Placa_extensora_Prisma.jpg"},
    {title:"Protetor de Impressora Hexa", path:"./img/Protetor_de_Impressora_Hexa.jpg"},
    {title:"Rele de acionamento", path:"./img/Rele_de_acionamento.jpg"},
    {title:"Rolamento da catraca", path:"./img/Rolamento_da_catraca.jpg"},
    {title:"Rolete impressora prisma", path:"./img/Rolete_impressora_prisma.jpg"},
    {title:"Secbox", path:"./img/Secbox.jpg"},
    {title:"Sensor 90º plus", path:"./img/Sensor_90_plus.jpg"},
    {title:"Sensor do cartao Plus", path:"./img/Sensor_do_cartao_Plus.jpg"},
    {title:"Sensor Guilhotina hexa", path:"./img/Sensor_Guilhotina_hexa.jpg"},
    {title:"Suporte bateria 2032", path:"./img/Suporte_bateria_2032.jpg"},
    {title:"Suporte bateria 2450", path:"./img/Suporte_bateria_2450.jpg"},
    {title:"Sensor papel Prisma", path:"./img/Sensor_papel_Prisma.jpg"},
    {title:"Sensor papel iDClass", path:"./img/Sensor_papel_iDClass.jpg"},
    {title:"Sensor de giro catraca iDBlock", path:"./img/Sensor_de_giro_catraca_iDBlock.jpg"},
    {title:"Solenoide iDBlock", path:"./img/Solenoide_iDBlock.jpg"},
    {title:"Solenoide da catraca c/ suporte", path:"./img/Solenoide_da_catraca-c-suporte.jpg"},
    {title:"Sensor magnetico ( intelbras)", path:"./img/Sensor_magnetico_intelbras.jpg"},
    {title:"Suporte Capota Argos", path:"./img/Suporte_Capota_Argos.jpg"},
    {title:"Sensor Proximidade iDBlock  125", path:"./img/Sensor_Proximidade_iDBlock_125.jpg"},
    {title:"Sensor Porta Aberta", path:"./img/Sensor_Porta_Aberta.jpg"},
    {title:"Tampa do Braço da Catraca", path:"./img/Tampa_do_Braço_da_Catraca.jpg"},
    {title:"Tubete bobina iDClass", path:"./img/Tubete_bobina_iDClass.jpg"},
    {title:"Tampa Botao Plus", path:"./img/Tampa_Botao_Plus.jpg"},
    {title:"Tampa cofre iDBlock", path:"./img/Tampa_cofre_idblock.jpg"},
    {title:"Tampa iDFlex", path:"./img/Tampa_iDFlex.jpg"},
    {title:"Tubete de bobina", path:"./img/Tubete_de_bobina.jpg"},
    {title:"Tag", path:"./img/Tag.jpg"},
    {title:"Teclado Prisma SF", path:"./img/Teclado_Prisma_SF.jpg"},
    {title:"Teclado da Catraca", path:"./img/Teclado_da_Catraca.jpg"},
    {title:"Tibbo", path:"./img/Tibbo.jpg"},
];