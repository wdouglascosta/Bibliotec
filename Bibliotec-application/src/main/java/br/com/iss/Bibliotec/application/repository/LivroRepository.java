package br.com.iss.Bibliotec.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.iss.Bibliotec.domain.model.Livro;

public interface LivroRepository extends GumgaCrudRepository<Livro, Long> {}