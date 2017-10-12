package br.com.iss.Bibliotec.domain.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QItem is a Querydsl query type for Item
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QItem extends EntityPathBase<Item> {

    private static final long serialVersionUID = -1626830593L;

    public static final QItem item = new QItem("item");

    public final io.gumga.domain.QGumgaModel _super = new io.gumga.domain.QGumgaModel(this);

    public final NumberPath<Integer> anoPublicacao = createNumber("anoPublicacao", Integer.class);

    public final StringPath autor = createString("autor");

    public final NumberPath<Integer> edicao = createNumber("edicao", Integer.class);

    public final StringPath editora = createString("editora");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath nome = createString("nome");

    public final NumberPath<Integer> numPaginas = createNumber("numPaginas", Integer.class);

    //inherited
    public final ComparablePath<io.gumga.domain.domains.GumgaOi> oi = _super.oi;

    public final StringPath origem = createString("origem");

    public final BooleanPath status = createBoolean("status");

    public final StringPath tipoItem = createString("tipoItem");

    public final NumberPath<Integer> version = createNumber("version", Integer.class);

    public final NumberPath<Integer> volume = createNumber("volume", Integer.class);

    public QItem(String variable) {
        super(Item.class, forVariable(variable));
    }

    public QItem(Path<? extends Item> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItem(PathMetadata<?> metadata) {
        super(Item.class, metadata);
    }

}

