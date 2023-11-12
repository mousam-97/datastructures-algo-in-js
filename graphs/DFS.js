// Depth first search in graphs

const graph = {
    a: [ 'b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};


function iterativeDFS(graph, src) {

    const stack = [src];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

function recursiveDFS(graph, src){
    console.log(src);
    for(let neighbor of graph[src]){
        recursiveDFS(graph, neighbor);
    }
}

// iterativeDFS(graph, 'a');
recursiveDFS(graph, 'a');