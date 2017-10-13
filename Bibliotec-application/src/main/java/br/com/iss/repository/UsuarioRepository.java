package br.com.iss.repository;

import br.com.iss.Bibliotec.domain.model.Usuario;
import io.gumga.domain.repository.GumgaCrudRepository;

public interface UsuarioRepository extends GumgaCrudRepository<Usuario, Long> {
}
