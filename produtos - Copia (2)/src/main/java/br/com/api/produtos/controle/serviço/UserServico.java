package br.com.api.produtos.controle.serviço;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.UserModelo;
import br.com.api.produtos.modelo.UserRespostaModelo;
import br.com.api.produtos.repositorio.UserRepositorio;

@Service
public class UserServico {

    @Autowired
    private UserRepositorio ur;

    @Autowired
    private UserRespostaModelo urm;

    // Método para listar todos os usuários
    public Iterable<UserModelo> listar() {
        return ur.findAll();
    }

    // Método para validar o e-mail
    private boolean isEmailValido(String email) {
        // Verifica se o e-mail contém "@" e "." (poderia ser melhorado com regex)
        return email != null && email.contains("@") && email.contains(".");
    }

    // Método para cadastrar ou alterar usuários
    public ResponseEntity<?> cadastrarAlterar(UserModelo um, String acao) {
        if (um.getNome().equals("")) {
            urm.setMensagem("O nome do usuário é obrigatório!");
            return new ResponseEntity<UserRespostaModelo>(urm, HttpStatus.BAD_REQUEST);
        } else if (um.getEmail().equals("")) {
            urm.setMensagem("O e-mail do usuário é obrigatório");
            return new ResponseEntity<UserRespostaModelo>(urm, HttpStatus.BAD_REQUEST);
        } else if (!isEmailValido(um.getEmail())) {
            urm.setMensagem("O e-mail fornecido não é válido. O e-mail deve conter '@' e '.'");
            return new ResponseEntity<UserRespostaModelo>(urm, HttpStatus.BAD_REQUEST);
        } else if (um.getIdade() == null || um.getIdade() <= 0) {
            urm.setMensagem("A idade do usuário é obrigatória e deve ser válida");
            return new ResponseEntity<UserRespostaModelo>(urm, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<UserModelo>(ur.save(um), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<UserModelo>(ur.save(um), HttpStatus.OK);
            }
        }
    }

    // Método para remover um usuário
    public ResponseEntity<UserRespostaModelo> remover(long id) {
        ur.deleteById(id);
        urm.setMensagem("O usuário foi removido com sucesso");
        return new ResponseEntity<UserRespostaModelo>(urm, HttpStatus.OK);
    }
}
