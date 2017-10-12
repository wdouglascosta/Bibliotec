package br.com.iss.Bibliotec.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QUsuario is a Querydsl query type for Usuario
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QUsuario extends EntityPathBase<Usuario> {

    private static final long serialVersionUID = 1546784194L;

    public static final QUsuario usuario = new QUsuario("usuario");

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

    public final StringPath situacao = createString("situacao");

    //inherited
    public final StringPath telefone = _super.telefone;

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public QUsuario(String variable) {
        super(Usuario.class, forVariable(variable));
    }

    public QUsuario(Path<? extends Usuario> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUsuario(PathMetadata<?> metadata) {
        super(Usuario.class, metadata);
    }

}

