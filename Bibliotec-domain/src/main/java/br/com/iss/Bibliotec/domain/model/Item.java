package br.com.iss.Bibliotec.domain.model;
import com.fasterxml.jackson.annotation.*;
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

@GumgaMultitenancy
@Audited
@Entity(name = "Item")
@Table(name = "Item", indexes = {
    @Index(name = "Item_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Item")
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
	@JsonSubTypes.Type(value = Livro.class, name = "Livro"),
		@JsonSubTypes.Type(value = Periodico.class, name = "Periodico"),
		@JsonSubTypes.Type(value = AcademPdco.class, name = "AcademPdco")
})
public abstract class Item extends GumgaModel<Long> {

    @Version
    @Column(name = "version")
    private Integer version;

    @Column(name = "status")
	private boolean status;
    @Column(name = "nome")
	private String nome;
    @Column(name = "edicao")
	private Integer edicao;
    @Column(name = "autor")
	private String autor;
    @Column(name = "editora")
	private String editora;
    @Column(name = "volume")
	private Integer volume;
	@Column(name = "anoPublicacao")
	private Integer anoPublicacao;
    @Column(name = "numPaginas")
	private Integer numPaginas;
    @Column(name = "origem")
	private String origem;
    @Column(name = "tipoItem")
	private String tipoItem;

    public Item() {}

	public boolean getStatus() {
		return this.status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getNome() {
		return this.nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getEdicao() {
		return this.edicao;
	}
	public void setEdicao(Integer edicao) {
		this.edicao = edicao;
	}

	public String getAutor() {
		return this.autor;
	}
	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getEditora() {
		return this.editora;
	}
	public void setEditora(String editora) {
		this.editora = editora;
	}

	public Integer getVolume() {
		return this.volume;
	}
	public void setVolume(Integer volume) {
		this.volume = volume;
	}

	public Integer getAnoPublicacao() {
		return this.anoPublicacao;
	}
	public void setAnoPublicacao(Integer anoPublicacao) {
		this.anoPublicacao = anoPublicacao;
	}

	public Integer getNumPaginas() {
		return this.numPaginas;
	}
	public void setNumPaginas(Integer numPaginas) {
		this.numPaginas = numPaginas;
	}

	public String getOrigem() {
		return this.origem;
	}
	public void setOrigem(String origem) {
		this.origem = origem;
	}

	public String getTipoItem() {
		return this.tipoItem;
	}
	public void setTipoItem(String tipoItem) {
		this.tipoItem = tipoItem;
	}


	@JsonGetter
	public String getType() {
    	return this.getClass().getSimpleName();
	}
}
