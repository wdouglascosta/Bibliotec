package br.com.iss.Bibliotec.domain.model;

import io.gumga.domain.GumgaModel;
import io.gumga.domain.GumgaMultitenancy;
import org.hibernate.envers.Audited;

import javax.persistence.*;
import java.util.Calendar;
import java.util.List;

@GumgaMultitenancy
@Audited
@Entity(name = "Emprestimo")
@Table(name = "Emprestimo", indexes = {
    @Index(name = "Emprestimo_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Emprestimo")
public class Emprestimo extends GumgaModel<Long> {

    @Version
    @Column(name = "version")
    private Integer version;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Livro> listaLivros;
    @OneToOne
	private Usuario usuario;
    @Column(name = "situaçãoEmp")
	private String situaçãoEmp;
    @Column(name = "qtdeRenovacoes")
	private Integer qtdeRenovacoes;
    @Column(name = "dataEmprestimo")
	private Calendar dataEmprestimo;
    @Column(name = "dataDevPrevista")
	private Calendar dataDevPrevista;
    @Column(name = "dataDevolucao")
	private Calendar dataDevolucao;
    @Column(name = "dataRetirada")
	private Calendar dataRetirada;

    public Emprestimo() {}

	public List<Livro> getListaLivros() {
		return this.listaLivros;
	}
	public void setListaLivros(List<Livro> listaLivros) {
		this.listaLivros = listaLivros;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getSituaçãoEmp() {
		return this.situaçãoEmp;
	}
	public void setSituaçãoEmp(String situaçãoEmp) {
		this.situaçãoEmp = situaçãoEmp;
	}

	public Integer getQtdeRenovacoes() {
		return this.qtdeRenovacoes;
	}
	public void setQtdeRenovacoes(Integer qtdeRenovacoes) {
		this.qtdeRenovacoes = qtdeRenovacoes;
	}

	public Calendar getDataEmprestimo() {
		return this.dataEmprestimo;
	}
	public void setDataEmprestimo(Calendar dataEmprestimo) {
		this.dataEmprestimo = dataEmprestimo;
	}

	public Calendar getDataDevPrevista() {
		return this.dataDevPrevista;
	}
	public void setDataDevPrevista(Calendar dataDevPrevista) {
		this.dataDevPrevista = dataDevPrevista;
	}

	public Calendar getDataDevolucao() {
		return this.dataDevolucao;
	}
	public void setDataDevolucao(Calendar dataDevolucao) {
		this.dataDevolucao = dataDevolucao;
	}

	public Calendar getDataRetirada() {
		return this.dataRetirada;
	}
	public void setDataRetirada(Calendar dataRetirada) {
		this.dataRetirada = dataRetirada;
	}
}
