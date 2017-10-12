package service;

import br.com.iss.Bibliotec.domain.model.AcademPdco;
import br.com.iss.repository.AcademPdcoRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;

public class AcademPdcoService extends GumgaService<AcademPdco, Long> {
    public final AcademPdcoRepository repository;

    public AcademPdcoService(AcademPdcoRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
