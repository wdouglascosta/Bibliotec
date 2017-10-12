package br.com.iss.Bibliotec.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QPessoa is a Querydsl query type for Pessoa
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QPessoa extends EntityPathBase<Pessoa> {

    private static final long serialVersionUID = 170873491L;

    public static final QPessoa pessoa = new QPessoa("pessoa");

    public final io.gumga.domain.QGumgaModel _super = new io.gumga.domain.QGumgaModel(this);

    public final BooleanPath ativo = createBoolean("ativo");

    public final StringPath cpf = createString("cpf");

    public final StringPath dataNasc = createString("dataNasc");

    public final StringPath email = createString("email");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath nome = createString("nome");

    //inherited
    public final ComparablePath<io.gumga.domain.domains.GumgaOi> oi = _super.oi;

    public final StringPath rg = createString("rg");

    public final StringPath senha = createString("senha");

    public final StringPath telefone = createString("telefone");

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public QPessoa(String variable) {
        super(Pessoa.class, forVariable(variable));
    }

    public QPessoa(Path<? extends Pessoa> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPessoa(PathMetadata<?> metadata) {
        super(Pessoa.class, metadata);
    }

}

