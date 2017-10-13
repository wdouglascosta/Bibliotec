package br.com.iss.Bibliotec.api;

import br.com.iss.Bibliotec.domain.model.Periodico;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/periodico")
@Transactional
public class PeriodicoAPI extends GumgaAPI<Periodico, Long> {

    @Autowired
    public PeriodicoAPI(GumgaService<Periodico, Long> service) {
        super(service);
    }
}
