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
@Entity(name = "Reserva")
@Table(name = "Reserva", indexes = {
    @Index(name = "Reserva_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Reserva")
public class Reserva extends GumgaModel<Long> {

    @Version
    @Column(name = "version")
    private Integer version;

    @Column(name = "dataReserva")
	private Calendar dataReserva;
    @Column(name = "dataRetirada")
	private Calendar dataRetirada;
    @OneToOne
	private Item item;
    @OneToOne
	private Usuario usuario;
    @Column(name = "statusReserva")
	private String statusReserva;
    @Column(name = "dataDisponibilizacao")
	private Calendar dataDisponibilizacao;

    public Reserva() {}

	public Calendar getDataReserva() {
		return this.dataReserva;
	}
	public void setDataReserva(Calendar dataReserva) {
		this.dataReserva = dataReserva;
	}

	public Calendar getDataRetirada() {
		return this.dataRetirada;
	}
	public void setDataRetirada(Calendar dataRetirada) {
		this.dataRetirada = dataRetirada;
	}

	public Item getItem() {
		return this.item;
	}
	public void setItem(Item item) {
		this.item = item;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getStatusReserva() {
		return this.statusReserva;
	}
	public void setStatusReserva(String statusReserva) {
		this.statusReserva = statusReserva;
	}

	public Calendar getDataDisponibilizacao() {
		return this.dataDisponibilizacao;
	}
	public void setDataDisponibilizacao(Calendar dataDisponibilizacao) {
		this.dataDisponibilizacao = dataDisponibilizacao;
	}
}
