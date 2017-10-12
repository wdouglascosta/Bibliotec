package br.com.iss.Bibliotec.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QLivro is a Querydsl query type for Livro
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QLivro extends EntityPathBase<Livro> {

    private static final long serialVersionUID = 1110318634L;

    public static final QLivro livro = new QLivro("livro");

    public final QItem _super = new QItem(this);

    //inherited
    public final NumberPath<Integer> anoPublicacao = _super.anoPublicacao;

    //inherited
    public final StringPath autor = _super.autor;

    //inherited
    public final NumberPath<Integer> edicao = _super.edicao;

    //inherited
    public final StringPath editora = _super.editora;

    //inherited
    public final NumberPath<Long> id = _super.id;

    public final StringPath isbn = createString("isbn");

    //inherited
    public final StringPath nome = _super.nome;

    //inherited
    public final NumberPath<Integer> numPaginas = _super.numPaginas;

    //inherited
    public final ComparablePath<io.gumga.domain.domains.GumgaOi> oi = _super.oi;

    //inherited
    public final StringPath origem = _super.origem;

    //inherited
    public final BooleanPath status = _super.status;

    //inherited
    public final StringPath tipoItem = _super.tipoItem;

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    //inherited
    public final NumberPath<Integer> volume = _super.volume;

    public QLivro(String variable) {
        super(Livro.class, forVariable(variable));
    }

    public QLivro(Path<? extends Livro> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLivro(PathMetadata<?> metadata) {
        super(Livro.class, metadata);
    }

}

