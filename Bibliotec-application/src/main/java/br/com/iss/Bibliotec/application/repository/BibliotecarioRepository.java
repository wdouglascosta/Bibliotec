package br.com.iss.Bibliotec.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.iss.Bibliotec.domain.model.Bibliotecario;

public interface BibliotecarioRepository extends GumgaCrudRepository<Bibliotecario, Long> {}