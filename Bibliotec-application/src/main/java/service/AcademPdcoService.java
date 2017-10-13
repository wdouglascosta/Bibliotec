package service;

import br.com.iss.Bibliotec.domain.model.AcademPdco;
import br.com.iss.repository.AcademPdcoRepository;
import io.gumga.application.GumgaService;
import io.gumga.domain.repository.GumgaCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional
public class AcademPdcoService extends GumgaService<AcademPdco, Long> {
    private final static Logger LOG = LoggerFactory.getLogger(AcademPdcoService.class);
    public final AcademPdcoRepository repository;

    @Autowired
    public AcademPdcoService(AcademPdcoRepository repository) {
        super(repository);
        this.repository = repository;
    }
}