export const createEdgesFromOneToMany = (source, targets, color, animated) => {
    const edges = [];
    
    targets.forEach( target => {
        edges.push({
            id: `edge-${source.id}-${target.id}`,
            source: source.id,
            target: target.id,
            animated: animated,
            style: {stroke: color}
          });
    });
    return edges;
};