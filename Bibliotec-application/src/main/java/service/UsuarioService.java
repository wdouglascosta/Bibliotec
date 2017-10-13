package service;


import br.com.iss.Bibliotec.domain.model.Usuario;
import br.com.iss.repository.UsuarioRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.logging.Logger;

@Service
@Transactional
public class UsuarioService extends GumgaService<Usuario, Long> {
    private final static org.slf4j.Logger LOG = LoggerFactory.getLogger(UsuarioService.class);
    public final UsuarioRepository repository;

    @Autowired
    public UsuarioService(UsuarioRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
