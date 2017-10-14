package br.com.iss.Bibliotec.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.iss.Bibliotec.domain.model.Usuario;

public interface UsuarioRepository extends GumgaCrudRepository<Usuario, Long> {}