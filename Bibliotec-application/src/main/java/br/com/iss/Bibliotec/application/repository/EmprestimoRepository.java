package br.com.iss.Bibliotec.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.iss.Bibliotec.domain.model.Emprestimo;

public interface EmprestimoRepository extends GumgaCrudRepository<Emprestimo, Long> {}