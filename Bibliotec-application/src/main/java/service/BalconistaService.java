package service;

import br.com.iss.Bibliotec.domain.model.Balconista;
import br.com.iss.repository.BalconistaRepository;
import br.com.iss.repository.UsuarioRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;

public class BalconistaService extends GumgaService<Balconista, Long> {
    private final BalconistaRepository repository;

    public BalconistaService(BalconistaRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
