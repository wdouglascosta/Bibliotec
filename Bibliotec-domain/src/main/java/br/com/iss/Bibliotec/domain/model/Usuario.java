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
@Entity(name = "Usuario")
@Table(name = "Usuario", indexes = {
    @Index(name = "Usuario_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Usuario")
public class Usuario extends Pessoa {

    @Version
    @Column(name = "version")
    private Integer version;

    @Column(name = "situacao")
	private String situacao;

    public Usuario() {}

	public String getSituacao() {
		return this.situacao;
	}
	public void setSituacao(String situacao) {
		this.situacao = situacao;
	}
}
