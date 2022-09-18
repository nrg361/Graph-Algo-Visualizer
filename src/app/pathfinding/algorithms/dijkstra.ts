import { NodeTypes, Node } from '../types';
import { updateNeighbours } from './updateNeighbours';

export const dijkstra = (grid: Node[][], startNode: Node, endNode: Node): Node[] => {
  const visitedNodes: Node[] = [];

  const unvisitedNodes: Node[] = [];
  for (const row of grid) {
    for (const node of row) {
      if (node.row === startNode.row && node.col === startNode.col) {
        node.distance = 0;
        unvisitedNodes.push(node);
      } else
        node.distance = Infinity;
    }
  }
  unvisitedNodes.push(startNode);

  while (unvisitedNodes.length) {
    sortUnvisited(unvisitedNodes, startNode);

    const closestNode = unvisitedNodes.shift();
    if (closestNode.type === NodeTypes.Wall) { continue; }

    closestNode.visited = true;
    visitedNodes.push(closestNode);

    // If endNode is reached => break
    if (closestNode.type === endNode.type) { break; }
    updateNeighbours(closestNode, grid, unvisitedNodes);
  }

  return visitedNodes;
};

const sortUnvisited = (unvisitedNodes: Node[], startNode: Node): void => {
  unvisitedNodes.sort((nodeA, nodeB) => {
    return nodeA.distance - nodeB.distance;
  });
};
