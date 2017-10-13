package br.com.iss.Bibliotec.api;

import br.com.iss.Bibliotec.domain.model.Balconista;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/balconista")
@Transactional
public class BalconistaAPI extends GumgaAPI<Balconista, Long>{

    @Autowired
    public BalconistaAPI(GumgaService<Balconista, Long> service) {
        super(service);
    }
}








