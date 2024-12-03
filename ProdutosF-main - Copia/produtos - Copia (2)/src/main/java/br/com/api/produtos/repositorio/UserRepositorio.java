package br.com.api.produtos.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.com.api.produtos.modelo.UserModelo;

@Repository
public interface UserRepositorio extends CrudRepository<UserModelo, Long> {

}
