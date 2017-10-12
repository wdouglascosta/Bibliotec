package br.com.iss.Bibliotec.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QBalconista is a Querydsl query type for Balconista
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QBalconista extends EntityPathBase<Balconista> {

    private static final long serialVersionUID = 345285080L;

    public static final QBalconista balconista = new QBalconista("balconista");

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

    //inherited
    public final StringPath telefone = _super.telefone;

    public final StringPath turnoTrabalho = createString("turnoTrabalho");

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public QBalconista(String variable) {
        super(Balconista.class, forVariable(variable));
    }

    public QBalconista(Path<? extends Balconista> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBalconista(PathMetadata<?> metadata) {
        super(Balconista.class, metadata);
    }

}

