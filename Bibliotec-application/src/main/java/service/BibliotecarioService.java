package service;

import br.com.iss.Bibliotec.domain.model.Bibliotecario;
import br.com.iss.repository.BibliotecarioRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;

public class BibliotecarioService extends GumgaService<Bibliotecario, Long>{
    private final BibliotecarioRepository repository;

    public BibliotecarioService(BibliotecarioRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
