$(function(){
    //LÊ DADOS JSON 
    $.getJSON("json/dados.json", function(data) {
        //ENVIA PARA FUNÇÃO CRIARTABELA
        createTable(data);         
    });


});

function createTable(data){

    var y0 = data.x;
    y0.unshift("ANO/MES");
    
    //ARMAZENA DADOS DE CADA EMPRESA EM ARRAYS
    //ACRESCENTA O NOME DA EMPRESA NO INICIO DO ARRAY

    var y1 = data["ABS TRANSPORTES E TURISMO LTDA"];
    y1.unshift("ABS TRANSPORTES E TURISMO LTDA");

    var y2 = data["AGM3 LOCACAO DE VEICULOS E SERVICOS LTDA"];
    y2.unshift("AGM3 LOCACAO DE VEICULOS E SERVICOS LTDA");

    var y3 = data["BR500 TRANSPORTES LTDA"];
    y3.unshift("BR500 TRANSPORTES LTDA");

    var y4 = data["CS BRASIL FROTAS LTDA"];
    y4.unshift("CS BRASIL FROTAS LTDA");

    var y5 = data["LOCALIZA RENT A CAR SA"];
    y5.unshift("LOCALIZA RENT A CAR SA");

    var y6 = data["M B DA COSTA EIRELI"];
    y6.unshift("M B DA COSTA EIRELI");

    var y7 = data["MRH LOCADORA DE VEICULOS LTDA"];
    y7.unshift("MRH LOCADORA DE VEICULOS LTDA");

    var y8 = data["PORTENTO CONSTRUCOES LTDA"];
    y8.unshift("PORTENTO CONSTRUCOES LTDA");

    var y9 = data["RIBAL LOCADORA DE VEICULOS LTDA"];
    y9.unshift("RIBAL LOCADORA DE VEICULOS LTDA");

    var y10 = data["V TECH COMERCIO E LOCACAO DE VEICULOS EIRELI"];
    y10.unshift("V TECH COMERCIO E LOCACAO DE VEICULOS EIRELI");

    //CRIA ARRAY BIDIMENSIONAL JÁ COM NOME DAS EMPRESAS
    var array = [];
    array = [
        ['ANO/MES',
        'ABS TRANSPORTES E TURISMO LTDA',
        'AGM3 LOCACAO DE VEICULOS E SERVICOS LTDA',
        'BR500 TRANSPORTES LTDA',
        'CS BRASIL FROTAS LTDA',
        'LOCALIZA RENT A CAR SA',
        'M B DA COSTA EIRELI',
        'MRH LOCADORA DE VEICULOS LTDA',
        'PORTENTO CONSTRUCOES LTDA',
        'RIBAL LOCADORA DE VEICULOS LTDA',
        'V TECH COMERCIO E LOCACAO DE VEICULOS EIRELI'
    ],[
        '','','','','','','','','','',''
    ]];

    //ACRESCENTA DADOS LINHA  A LINHA
    for(var i=1;i<y0.length;i++){
        array.splice(i, 0, [y0[i], y1[i], y2[i], y3[i], y4[i], y5[i], y6[i], y7[i], y8[i], y9[i], y10[i]]);
    }

    table = document.getElementById("table");
    

    for(var i = 0; i < array.length; i++)
    {
        // CRIA NOVA LINHA
        var newRow = table.insertRow(table.length);
        for(var j = 0; j < array[i].length; j++)
        {
            // CRIA NOVA CELULA
            var cell = newRow.insertCell(j);
            
            // INSERE VALOR NA CELULA
            cell.innerHTML = array[i][j];
        }
    }
}