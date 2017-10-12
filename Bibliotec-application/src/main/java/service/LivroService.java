package service;

import br.com.iss.Bibliotec.domain.model.Livro;
import br.com.iss.repository.LivroRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;

public class LivroService extends GumgaService<Livro,Long> {
    private final LivroRepository repository;

    public LivroService(LivroRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
