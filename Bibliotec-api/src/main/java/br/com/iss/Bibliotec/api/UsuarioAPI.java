package br.com.iss.Bibliotec.api;

import br.com.iss.Bibliotec.domain.model.Usuario;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/usuario")
@Transactional
public class UsuarioAPI extends GumgaAPI<Usuario, Long> {

    @Autowired
    public UsuarioAPI(GumgaService<Usuario, Long> service) {
        super(service);
    }
}
