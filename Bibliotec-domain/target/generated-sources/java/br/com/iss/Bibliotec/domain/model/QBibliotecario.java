package br.com.iss.Bibliotec.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QBibliotecario is a Querydsl query type for Bibliotecario
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QBibliotecario extends EntityPathBase<Bibliotecario> {

    private static final long serialVersionUID = 453675046L;

    public static final QBibliotecario bibliotecario = new QBibliotecario("bibliotecario");

    public final QPessoa _super = new QPessoa(this);

    //inherited
    public final BooleanPath ativo = _super.ativo;

    //inherited
    public final StringPath cpf = _super.cpf;

    //inherited
    public final StringPath dataNasc = _super.dataNasc;

    //inherited
    public final StringPath email = _super.email;

    //inherited
    public final NumberPath<Long> id = _super.id;

    //inherited
    public final StringPath nome = _super.nome;

    //inherited
    public final ComparablePath<io.gumga.domain.domains.GumgaOi> oi = _super.oi;

    //inherited
    public final StringPath rg = _super.rg;

    //inherited
    public final StringPath senha = _super.senha;

    public final StringPath setor = createString("setor");

    //inherited
    public final StringPath telefone = _super.telefone;

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public QBibliotecario(String variable) {
        super(Bibliotecario.class, forVariable(variable));
    }

    public QBibliotecario(Path<? extends Bibliotecario> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBibliotecario(PathMetadata<?> metadata) {
        super(Bibliotecario.class, metadata);
    }

}

