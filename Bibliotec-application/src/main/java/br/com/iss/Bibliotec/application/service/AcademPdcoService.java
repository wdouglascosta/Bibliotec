package br.com.iss.Bibliotec.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.iss.Bibliotec.application.repository.AcademPdcoRepository;
import br.com.iss.Bibliotec.domain.model.AcademPdco;


@Service
@Transactional
public class AcademPdcoService extends GumgaService<AcademPdco, Long> {

    private final static Logger LOG = LoggerFactory.getLogger(AcademPdcoService.class);
    private final AcademPdcoRepository repository;

    @Autowired
    public AcademPdcoService(AcademPdcoRepository repository) {
        super(repository);
        this.repository = repository;
    }

}