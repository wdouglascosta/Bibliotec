package br.com.iss.Bibliotec.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.iss.Bibliotec.application.repository.BibliotecarioRepository;
import br.com.iss.Bibliotec.domain.model.Bibliotecario;


@Service
@Transactional
public class BibliotecarioService extends GumgaService<Bibliotecario, Long> {

    private final static Logger LOG = LoggerFactory.getLogger(BibliotecarioService.class);
    private final BibliotecarioRepository repository;

    @Autowired
    public BibliotecarioService(BibliotecarioRepository repository) {
        super(repository);
        this.repository = repository;
    }

}