package br.com.iss.Bibliotec.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.iss.Bibliotec.domain.model.Pessoa;

public interface PessoaRepository extends GumgaCrudRepository<Pessoa, Long> {}