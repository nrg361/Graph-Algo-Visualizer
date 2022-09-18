import { NodeTypes, Node } from '../types';

export const dfs = (grid: Node[][], startNode: Node, endNode: Node): Node[] => {
    const visitedNodes: Node[] = [];
    dfss(grid, visitedNodes, startNode, startNode.row, startNode.col);

    return visitedNodes;
};

const dfss = (grid: Node[][], visitedNodes: Node[], parent: Node, row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row === grid.length || col === grid[0].length) return false;
    let node = grid[row][col];
    if (node.type === NodeTypes.Wall || node.visited === true) return false;
    visitedNodes.push(node);
    node.visited = true;
    if (node.type !== NodeTypes.Start) {
        node.previousNode = parent;
    }
    if (node.type === NodeTypes.End) { return true; }
    if (dfss(grid, visitedNodes, node, row + 1, col)) return true;
    if (dfss(grid, visitedNodes, node, row, col + 1)) return true;
    if (dfss(grid, visitedNodes, node, row - 1, col)) return true;
    if (dfss(grid, visitedNodes, node, row, col - 1)) return true;
    return false;
};
