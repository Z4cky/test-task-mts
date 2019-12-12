import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { ICurrentNode, INavigationNode } from "../navigation.model";

@Component({
  selector: "app-tree",
  templateUrl: "tree.component.html",
  styleUrls: ["tree.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  @Input() currentNode: ICurrentNode;
  @Input() nodes: INavigationNode[];


  get filteredNodes(): INavigationNode[] {
    return this.nodes
      ? this.nodes.filter(n => !n.hidden)
      : [];
  }
}
