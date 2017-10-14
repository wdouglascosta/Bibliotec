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
@Entity(name = "Periodico")
@Table(name = "Periodico", indexes = {
    @Index(name = "Periodico_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Periodico")
public class Periodico extends Item {


    @Column(name = "issn")
	private String issn;
    @Column(name = "tipoPeriodico")
	private String tipoPeriodico;

    public Periodico() {}

	public String getIssn() {
		return this.issn;
	}
	public void setIssn(String issn) {
		this.issn = issn;
	}

	public String getTipoPeriodico() {
		return this.tipoPeriodico;
	}
	public void setTipoPeriodico(String tipoPeriodico) {
		this.tipoPeriodico = tipoPeriodico;
	}
}
