package br.com.iss.Bibliotec.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.iss.Bibliotec.application.repository.LivroRepository;
import br.com.iss.Bibliotec.domain.model.Livro;


@Service
@Transactional
public class LivroService extends GumgaService<Livro, Long> {

    private final static Logger LOG = LoggerFactory.getLogger(LivroService.class);
    private final LivroRepository repository;

    @Autowired
    public LivroService(LivroRepository repository) {
        super(repository);
        this.repository = repository;
    }

}