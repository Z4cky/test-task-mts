export interface INavigationNode {
  hidden?: boolean;
  children?: INavigationNode[];
  name: string;
}

export type NavigationResponse =  { [name: string]: INavigationNode[] };

export interface INavigationViews {
  [name: string]: INavigationNode[];
}

export interface ICurrentNode {
  nodes: INavigationNode[];
}

export interface ICurrentNodes {
  [view: string]: ICurrentNode;
}
