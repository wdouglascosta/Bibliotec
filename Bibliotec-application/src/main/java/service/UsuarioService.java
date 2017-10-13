package service;


import br.com.iss.Bibliotec.domain.model.Usuario;
import br.com.iss.repository.UsuarioRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;
import org.slf4j.LoggerFactory;

import java.util.logging.Logger;

public class UsuarioService extends GumgaService<Usuario, Long> {
//    private final static Logger LOG = LoggerFactory.getLogger(UsuarioService.class);
    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
