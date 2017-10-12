package br.com.iss.Bibliotec.domain.model;
import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import io.gumga.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import io.gumga.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@Audited
@Entity(name = "AcademPdco")
@Table(name = "AcademPdco", indexes = {
    @Index(name = "AcademPdco_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_AcademPdco")
public class AcademPdco extends Item {

    @Version
    @Column(name = "version")
    private Integer version;

    @Column(name = "modalidade")
	private String modalidade;

    public AcademPdco() {}

	public String getModalidade() {
		return this.modalidade;
	}
	public void setModalidade(String modalidade) {
		this.modalidade = modalidade;
	}
}
