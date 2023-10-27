const dados = require('../database/consignado_bd')
const error = require('../errors/error_consignado')

exports.consignado = (req, res) => {
    const {numeroBeneficio, codigoSolicitante, numeroContrato, motivoExclusao} = req.body

 // VALIDAR DADOS ENVIADOS
    const validate = dados.some(e => e.numeroBeneficio.includes(numeroBeneficio) && 
    e.codigoSolicitante === codigoSolicitante &&
    e.numeroContrato.includes(numeroContrato) &&
    e.motivoExclusao.includes(motivoExclusao)
    )
    

  if(validate){
    res.status(400).json(error)
  }

  // VALIDAÇÃO DE NÃO ENVIO DO CAMPO
  if(numeroBeneficio == null){
    return res.status(400).json({"message": "O campo #numeroBeneficio é obrigatorio!!"});
  }

  if(codigoSolicitante == null){
    return res.status(400).json({"message": "O campo #codigoSolicitante é obrigatorio!!"});
  }

  if(numeroContrato == null){
    return res.status(400).json({"message": "O campo #numeroContrato é obrigatorio!!"});
  }

  if(motivoExclusao == null){
    return res.status(400).json({"message": "O campo #motivoExclusao é obrigatorio!!"});
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
    res.status(200).json({"status:": "OK", "message": "Todos os campos foram enviados corretamente"})
  }

};
