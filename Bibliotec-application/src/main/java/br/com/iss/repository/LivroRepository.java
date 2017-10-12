package br.com.iss.repository;

import br.com.iss.Bibliotec.domain.model.Livro;
import io.gumga.domain.repository.GumgaCrudRepository;

public interface LivroRepository extends GumgaCrudRepository<Livro, Long> {
}
