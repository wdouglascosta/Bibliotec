package br.com.iss.Bibliotec.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QPeriodico is a Querydsl query type for Periodico
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QPeriodico extends EntityPathBase<Periodico> {

    private static final long serialVersionUID = -217677112L;

    public static final QPeriodico periodico = new QPeriodico("periodico");

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

    public final StringPath issn = createString("issn");

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

    public final StringPath tipoPeriodico = createString("tipoPeriodico");

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    //inherited
    public final NumberPath<Integer> volume = _super.volume;

    public QPeriodico(String variable) {
        super(Periodico.class, forVariable(variable));
    }

    public QPeriodico(Path<? extends Periodico> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPeriodico(PathMetadata<?> metadata) {
        super(Periodico.class, metadata);
    }

}

