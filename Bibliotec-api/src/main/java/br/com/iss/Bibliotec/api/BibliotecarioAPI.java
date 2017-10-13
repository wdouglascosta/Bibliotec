package br.com.iss.Bibliotec.api;

import br.com.iss.Bibliotec.domain.model.Bibliotecario;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/bibliotecario")
@Transactional
public class BibliotecarioAPI extends GumgaAPI<Bibliotecario, Long>{

    @Autowired
    public BibliotecarioAPI(GumgaService<Bibliotecario, Long> service) {
        super(service);
    }
}
