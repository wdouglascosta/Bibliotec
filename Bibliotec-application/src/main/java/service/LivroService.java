package service;

import br.com.iss.Bibliotec.domain.model.Livro;
import br.com.iss.repository.LivroRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LivroService extends GumgaService<Livro,Long> {
    private final static Logger LOG = LoggerFactory.getLogger(LivroService.class);
    public final LivroRepository repository;

    @Autowired
    public LivroService(LivroRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
