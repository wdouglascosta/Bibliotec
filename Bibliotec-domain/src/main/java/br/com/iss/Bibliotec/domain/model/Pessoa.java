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
@Entity(name = "Pessoa")
@Table(name = "Pessoa", indexes = {
    @Index(name = "Pessoa_gum_oi", columnList = "oi")
})
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Pessoa")
public abstract class Pessoa extends GumgaModel<Long> {

    @Version
    @Column(name = "version")
    private Integer version;

    @Column(name = "nome")
	private String nome;
    @Column(name = "cpf")
	private String cpf;
    @Column(name = "rg")
	private String rg;
    @Column(name = "dataNasc")
	private String dataNasc;
    @Column(name = "email")
	private String email;
    @Column(name = "telefone")
	private String telefone;
    @Column(name = "senha")
	private String senha;
    @Column(name = "ativo")
	private boolean ativo;


    public Pessoa() {}

	public String getNome() {
		return this.nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return this.cpf;
	}
	public boolean setCpf(String cpf) {
		if ( cpf == null ){
			return false;
		}
		else{
			String cpfGerado = "";
			this.cpf = cpf;
			removerCaracteres();
			if ( verificarSeTamanhoInvalido(this.cpf) )
				return false;
			if ( verificarSeDigIguais(this.cpf) )
				return false;
			cpfGerado = this.cpf.substring(0, 9);
			cpfGerado = cpfGerado.concat(calculoComCpf(cpfGerado));
			cpfGerado = cpfGerado.concat(calculoComCpf(cpfGerado));

			if ( !cpfGerado.equals(this.cpf))
				return false;
		}
		return true;
	}

	public String getRg() {
		return this.rg;
	}
	public void setRg(String rg) {
		this.rg = rg;
	}

	public String getDataNasc() {
		return this.dataNasc;
	}
	public void setDataNasc(String dataNasc) {
		this.dataNasc = dataNasc;
	}

	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return this.telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getSenha() {
		return this.senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}

	public boolean getAtivo() {
		return this.ativo;
	}
	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}


	private void removerCaracteres(){
		this.cpf = this.cpf.replace("-","");
		this.cpf = this.cpf.replace(".","");
	}
	private boolean verificarSeTamanhoInvalido(String cpf){
		if ( cpf.length() != 11 )
			return true;
		return false;
	}
	private boolean verificarSeDigIguais(String cpf){
		//char primDig = cpf.charAt(0);
		char primDig = '0';
		char [] charCpf = cpf.toCharArray();
		for( char c: charCpf  )
			if ( c != primDig )
				return false;
		return true;
	}
	private String calculoComCpf(String cpf){
		int digGerado = 0;
		int mult = cpf.length()+1;
		char [] charCpf = cpf.toCharArray();
		for ( int i = 0; i < cpf.length(); i++ )
			digGerado += (charCpf[i]-48)* mult--;
		if ( digGerado % 11 < 2)
			digGerado = 0;
		else
			digGerado = 11 - digGerado % 11;
		return  String.valueOf(digGerado);
	}

}
