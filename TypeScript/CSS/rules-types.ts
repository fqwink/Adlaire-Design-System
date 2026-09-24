export type CssDeclarationValue = string | number;

export interface CssDeclaration {
  readonly property: string;
  readonly value: CssDeclarationValue;
}

export interface CssRule {
  readonly selector: string;
  readonly declarations: readonly CssDeclaration[];
  readonly media?: string;
}

export interface CssRuleFile {
  readonly path: string;
  readonly css: string;
}

