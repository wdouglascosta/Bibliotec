package service;

import br.com.iss.Bibliotec.domain.model.Bibliotecario;
import br.com.iss.repository.BibliotecarioRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BibliotecarioService extends GumgaService<Bibliotecario, Long>{
    private final static Logger LOG = LoggerFactory.getLogger(BibliotecarioService.class);
    public final BibliotecarioRepository repository;

    @Autowired
    public BibliotecarioService(BibliotecarioRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
