
    
            $(function(){
                //LÊ DADOS JSON
                $.getJSON("json/dados.json", function(data) {
                    //ENVIA PARA FUNÇÃO CRIARGRAFICO
                    createGraph(data);         
                });


            });

            function createGraph(data){

                //ARMAZENA DADOS DE CADA EMPRESA EM ARRAYS
                //ACRESCENTA O NOME DA EMPRESA NO INICIO DO ARRAY
                var x = data.x;

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
                
                var chart = c3.generate({
					bindto: '#chart',
                    data: {
                        columns: [
                        y1,y2,y3,y4,y5,y6,y7,y8,y9,y10
                        ],
                        type: 'area-spline'
                    },
                    legend: {
                        position: 'right'
                    },
                    axis: {
                        x: {
                            type: 'category',
                            tick:{
                                multiline: false,
                                culling:{
                                    max: 9
                                }
                            },
                            categories: x
                        },
                        y: {
                            tick: {
                                format: d3.format("$,")
                            }
                        }
                    }
                });
            }
            
            

        