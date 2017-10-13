package service;

import br.com.iss.Bibliotec.domain.model.Periodico;
import br.com.iss.repository.PeriodicoRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PeriodicoService extends GumgaService<Periodico, Long> {
    private final static Logger LOG = LoggerFactory.getLogger(PeriodicoService.class);
    public final PeriodicoRepository repository;

    @Autowired
    public PeriodicoService(PeriodicoRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
