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
@Entity(name = "Balconista")
@Table(name = "Balconista", indexes = {
    @Index(name = "Balconista_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Balconista")
public class Balconista extends Pessoa {

    @Column(name = "turnoTrabalho")
	private String turnoTrabalho;

    public Balconista() {}

	public String getTurnoTrabalho() {
		return this.turnoTrabalho;
	}
	public void setTurnoTrabalho(String turnoTrabalho) {
		this.turnoTrabalho = turnoTrabalho;
	}
}
