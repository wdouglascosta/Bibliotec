package br.com.iss.Bibliotec.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.iss.Bibliotec.application.repository.ItemRepository;
import br.com.iss.Bibliotec.domain.model.Item;


@Service
@Transactional
public class ItemService extends GumgaService<Item, Long> {

    private final static Logger LOG = LoggerFactory.getLogger(ItemService.class);
    private final ItemRepository repository;

    @Autowired
    public ItemService(ItemRepository repository) {
        super(repository);
        this.repository = repository;
    }

}