declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: unknown, vars?: { type?: string; linesClass?: string });
    lines: HTMLElement[];
    revert(): void;
  }
}
