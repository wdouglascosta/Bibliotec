package br.com.iss.Bibliotec.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.iss.Bibliotec.application.repository.EmprestimoRepository;
import br.com.iss.Bibliotec.domain.model.Emprestimo;

import br.com.iss.Bibliotec.domain.model.Livro;

@Service
@Transactional
public class EmprestimoService extends GumgaService<Emprestimo, Long> {

    private final static Logger LOG = LoggerFactory.getLogger(EmprestimoService.class);
    private final EmprestimoRepository repository;

    @Autowired
    public EmprestimoService(EmprestimoRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Transactional
    public Emprestimo loadEmprestimoFat(Long id) {
    Emprestimo obj = view(id);

        Hibernate.initialize(obj.getListaLivros());
        Hibernate.initialize(obj.getListaLivros());
        Hibernate.initialize(obj.getListaLivros());
        Hibernate.initialize(obj.getListaLivros());
        Hibernate.initialize(obj.getListaLivros());
        Hibernate.initialize(obj.getListaLivros());
        Hibernate.initialize(obj.getListaLivros());
        Hibernate.initialize(obj.getListaLivros());


    return obj;
    }
}