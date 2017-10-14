package br.com.iss.Bibliotec.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.iss.Bibliotec.application.repository.UsuarioRepository;
import br.com.iss.Bibliotec.domain.model.Usuario;


@Service
@Transactional
public class UsuarioService extends GumgaService<Usuario, Long> {

    private final static Logger LOG = LoggerFactory.getLogger(UsuarioService.class);
    private final UsuarioRepository repository;

    @Autowired
    public UsuarioService(UsuarioRepository repository) {
        super(repository);
        this.repository = repository;
    }

}