import { ChangeDetectionStrategy, Component, Input, OnChanges } from "@angular/core";

import { INavigationNode } from "../navigation.model";

@Component({
  selector: "tree-node",
  templateUrl: "tree-node.component.html",
  styleUrls: ["tree-node.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeNodeComponent implements OnChanges {
  @Input() level = 1;
  @Input() node: INavigationNode;
  @Input() isParentExpanded = true;
  @Input() selectedNodes: INavigationNode[];

  isExpanded = false;
  isSelected = false;
  classes: { [index: string]: boolean };
  nodeChildren: INavigationNode[];

  constructor() { }

  ngOnChanges(): void {
    this.nodeChildren = this.node && this.node.children
      ? this.node.children.filter(n => !n.hidden)
      : [];

    if (this.selectedNodes) {
      const selected: any = this.selectedNodes.indexOf(this.node);
      this.isSelected = selected !== -1;
      this.isExpanded = this.isParentExpanded &&  (this.isSelected || (this.isExpanded));
    } else {
      this.isSelected = false;
    }
    this.setClasses();
  }

  setClasses(): void {
    this.classes = {
      ["level-" + this.level]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected
    };
  }

  headerClicked(): void {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
  }
}
