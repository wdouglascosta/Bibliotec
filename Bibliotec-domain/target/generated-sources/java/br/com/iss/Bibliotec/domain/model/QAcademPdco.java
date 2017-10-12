package br.com.iss.Bibliotec.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QAcademPdco is a Querydsl query type for AcademPdco
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QAcademPdco extends EntityPathBase<AcademPdco> {

    private static final long serialVersionUID = -169658599L;

    public static final QAcademPdco academPdco = new QAcademPdco("academPdco");

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

    public final StringPath modalidade = createString("modalidade");

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

    public QAcademPdco(String variable) {
        super(AcademPdco.class, forVariable(variable));
    }

    public QAcademPdco(Path<? extends AcademPdco> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAcademPdco(PathMetadata<?> metadata) {
        super(AcademPdco.class, metadata);
    }

}

