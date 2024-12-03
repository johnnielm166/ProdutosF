package br.com.api.produtos.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.api.produtos.controle.serviço.UserServico;
import br.com.api.produtos.modelo.UserModelo;
import br.com.api.produtos.modelo.UserRespostaModelo;

@RestController
@CrossOrigin(origins = "*")
public class UserControle {

    @Autowired
    private UserServico us;

    @DeleteMapping("/removerUsuario/{id}")
    public ResponseEntity<UserRespostaModelo> remover(@PathVariable long id) {
        return us.remover(id);
    }

    @PutMapping("/alterarUsuario")
    public ResponseEntity<?> alterar(@RequestBody UserModelo um) {
        return us.cadastrarAlterar(um, "alterar");
    }

    @PostMapping("/cadastrarUsuario")
    public ResponseEntity<?> cadastrar(@RequestBody UserModelo um) {
        return us.cadastrarAlterar(um, "cadastrar");
    }

    @GetMapping("/listarUsuarios")
    public Iterable<UserModelo> listar() {
        return us.listar();
    }

    // Mudança da rota GET / para GET /usuarios
    @GetMapping("/usuarios")
    public String rota() {
        return "API de Produtos e Usuários funcionando";
    }
}

