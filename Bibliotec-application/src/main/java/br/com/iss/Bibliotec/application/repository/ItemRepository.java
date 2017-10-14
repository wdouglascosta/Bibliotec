package br.com.iss.Bibliotec.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.iss.Bibliotec.domain.model.Item;

public interface ItemRepository extends GumgaCrudRepository<Item, Long> {}