package service;

import br.com.iss.Bibliotec.domain.model.Periodico;
import br.com.iss.repository.PeriodicoRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;

public class PeriodicoService extends GumgaService<Periodico, Long> {
    public final PeriodicoRepository repository;

    public PeriodicoService(GumgaCrudRepository<Periodico, Long> repository, PeriodicoRepository repository1) {
        super(repository);
        this.repository = repository1;
    }
}
