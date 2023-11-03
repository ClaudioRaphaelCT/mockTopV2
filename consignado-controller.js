const dados = require('../database/consignado_bd')
const error = require('../errors/error_consignado')
const error2 = require('../errors/error_2')

exports.consignado = (req, res) => {
    const {numeroBeneficio, codigoSolicitante, numeroContrato, motivoExclusao} = req.body

 // VALIDAR DADOS ENVIADOS
    const validate = dados.some(e => e.numeroBeneficio.includes(numeroBeneficio) && 
    e.codigoSolicitante === codigoSolicitante &&
    e.numeroContrato.includes(numeroContrato) &&
    e.motivoExclusao.includes(motivoExclusao)
    )
    

  if(validate){
    res.status(412).json(error)
  }

  if(numeroContrato == "1000000786"){
    res.status(412).json(error)
  }


  // VALIDAÇÃO DE NÃO ENVIO DO CAMPO
 /* if(numeroBeneficio == null){
    return res.status(400).json(error2);
  }

  if(codigoSolicitante == null){
    return res.status(400).json(error2);
  }

  if(numeroContrato == null){
    return res.status(400).json(error2);
  }

  if(motivoExclusao == null){
    return res.status(400).json(error2);
  }*/

  if(motivoExclusao = 30)
  {
    return res.status(400).json(error2)
  }

  // VALIDAÇÃO DE TIPOS
  if(typeof codigoSolicitante !== 'number'){
    return res.status(400).json({"message": "codigoSolicitante não pode ser STRING"});
  }

  if(typeof numeroContrato !== 'string'){
    return res.status(400).json({"message": "numeroContrato não pode ser NUMBER"});
  }

  if(typeof numeroBeneficio !== 'number'){
    return res.status(400).json({"message": "numeroBeneficio não pode ser STRING"});
  }

  if(typeof motivoExclusao !== 'number'){
    return res.status(400).json({"message": "motivoExclusao não pode ser STRING"});
  }
  
  

  else{
    res.status(200).json({"numeroContrato": "CONTRATO_XYZ", "competenciaExclusao": "202005", "hashOperacao": "32541", "codigoSucesso":"BF", "mensagem":"Exclusão (ou baixa) efetuada com sucesso"})
  }

};
