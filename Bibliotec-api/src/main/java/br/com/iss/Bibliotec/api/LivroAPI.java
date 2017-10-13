package br.com.iss.Bibliotec.api;

import br.com.iss.Bibliotec.domain.model.Livro;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/livro")
@Transactional
public class LivroAPI extends GumgaAPI<Livro, Long> {

    @Autowired
    public LivroAPI(GumgaService<Livro, Long> service) {
        super(service);
    }
}
