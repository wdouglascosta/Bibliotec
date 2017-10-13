package br.com.iss.Bibliotec.api;

import br.com.iss.Bibliotec.domain.model.AcademPdco;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/academpdco")
@Transactional
public class AcademPdcoAPI extends GumgaAPI<AcademPdco, Long> {

    @Autowired
    public AcademPdcoAPI(GumgaService<AcademPdco, Long> service) {
        super(service);
    }
}




