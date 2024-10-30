function createRange(node: Node, chars: number, range?: Range): Range {
  if (!range) {
    range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);
  }

  if (chars === 0) {
    range.setEnd(node, chars);
  } else if (node && chars > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent && node.textContent.length < chars) {
        chars -= node.textContent.length;
      } else {
        range.setEnd(node, chars);
        chars = 0;
      }
    } else {
      for (let lp = 0; lp < node.childNodes.length; lp++) {
        range = createRange(node.childNodes[lp], chars, range);

        if (chars === 0) {
          break;
        }
      }
    }
  }

  return range;
}

export function setCurrentCursorPosition(chars: number, el: Node) {
  if (chars >= 0) {
    const selection = window.getSelection();

    const range = createRange(el, chars);

    if (range && selection) {
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}
