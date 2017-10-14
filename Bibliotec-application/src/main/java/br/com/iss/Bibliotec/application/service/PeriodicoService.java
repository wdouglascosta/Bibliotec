package br.com.iss.Bibliotec.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.iss.Bibliotec.application.repository.PeriodicoRepository;
import br.com.iss.Bibliotec.domain.model.Periodico;


@Service
@Transactional
public class PeriodicoService extends GumgaService<Periodico, Long> {

    private final static Logger LOG = LoggerFactory.getLogger(PeriodicoService.class);
    private final PeriodicoRepository repository;

    @Autowired
    public PeriodicoService(PeriodicoRepository repository) {
        super(repository);
        this.repository = repository;
    }

}