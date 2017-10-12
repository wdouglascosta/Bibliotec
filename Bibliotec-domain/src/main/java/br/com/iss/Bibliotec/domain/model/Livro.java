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
@Entity(name = "Livro")
@Table(name = "Livro", indexes = {
    @Index(name = "Livro_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Livro")
public class Livro extends Item {

    @Version
    @Column(name = "version")
    private Integer version;

    @Column(name = "isbn")
	private String isbn;

    public Livro() {}

	public String getIsbn() {
		return this.isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
}
