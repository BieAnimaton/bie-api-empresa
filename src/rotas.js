const express = require('express');
const router = express.Router();

const control_usu = require('./controladores/controlador_usuarios')

router.get('/usuarios', control_usu.mostrar);
router.get('/usuario/:id?', control_usu.enc_pelo_id);
router.get('/usuario_n/:nome?', control_usu.end_pelo_nome);
router.delete('/deletar_usuario/:id', control_usu.deletar)
router.post('/adicionar_usuario', control_usu.adicionar);
router.patch('/atualizar_usuario/:id', control_usu.atualizar);

module.exports = router;