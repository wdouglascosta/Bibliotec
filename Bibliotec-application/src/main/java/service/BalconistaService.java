package service;

import br.com.iss.Bibliotec.domain.model.Balconista;
import br.com.iss.repository.BalconistaRepository;
import br.com.iss.repository.UsuarioRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BalconistaService extends GumgaService<Balconista, Long> {
    private final static Logger LOG = LoggerFactory.getLogger(BalconistaService.class);
    public final BalconistaRepository repository;

    @Autowired
    public BalconistaService(BalconistaRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
