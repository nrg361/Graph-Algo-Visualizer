import { NodeTypes, Node } from '../types';

export const bfs = (grid: Node[][], startNode: Node, endNode: Node): Node[] => {
    const visitedNodes: Node[] = [];

    const unvisitedNodes: Node[] = [];
    unvisitedNodes.push(startNode);

    while (unvisitedNodes.length) {
        const node = unvisitedNodes.shift();

        node.visited = true;
        visitedNodes.push(node);
        let row = node.row, col = node.col;
        // If endNode is reached => break
        if (node.type === endNode.type) { break; }
        if (valid(grid, row + 1, col, node)) unvisitedNodes.push(grid[row + 1][col]);
        if (valid(grid, row, col + 1, node)) unvisitedNodes.push(grid[row][col + 1]);
        if (valid(grid, row - 1, col, node)) unvisitedNodes.push(grid[row - 1][col]);
        if (valid(grid, row, col - 1, node)) unvisitedNodes.push(grid[row][col - 1]);
    }

    return visitedNodes;
};

const valid = (grid: Node[][], row: number, col: number, parent: Node): boolean => {
    if (row < 0 || col < 0 || row === grid.length || col === grid[0].length) return false;
    let node = grid[row][col];
    if (node.type === NodeTypes.Wall || node.visited === true) return false;
    node.visited = true;
    node.previousNode = parent;
    return true;
};
