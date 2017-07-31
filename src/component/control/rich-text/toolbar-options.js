export default {
  options: [
    'inline',
    'blockType',
    // 'fontSize',
    // 'fontFamily',
    'list',
    // 'textAlign',
    // 'colorPicker',
    'link',
    // 'embedded',
    // 'emoji',
    // 'image',
    'remove'
    // 'history'
  ],
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    // options: [ 'bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript' ],
    options: [ 'bold', 'italic' ],
    italic: { className: undefined, title: undefined },
    underline: { className: undefined, title: undefined }
    // strikethrough: { className: undefined, title: undefined },
    // monospace: { className: undefined, title: undefined },
    // superscript: { className: undefined, title: undefined },
    // subscript: { className: undefined, title: undefined }
  },
  blockType: {
    inDropdown: true,
    // options: [ 'Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote' ],
    options: [ 'Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6' ],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: undefined
  },
  // fontSize: {
  //   options: [ 8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96 ],
  //   className: undefined,
  //   component: undefined,
  //   dropdownClassName: undefined,
  //   title: undefined
  // },
  // fontFamily: {
  //   options: [ 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana' ],
  //   className: undefined,
  //   component: undefined,
  //   dropdownClassName: undefined,
  //   title: undefined
  // },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    // options: [ 'unordered', 'ordered', 'indent', 'outdent' ],
    options: [ 'unordered', 'ordered' ],
    unordered: { className: undefined, title: undefined },
    ordered: { className: undefined, title: undefined },
    // indent: { className: undefined, title: undefined },
    // outdent: { className: undefined, title: undefined },
    title: undefined
  },
  // textAlign: {
  //   inDropdown: false,
  //   className: undefined,
  //   component: undefined,
  //   dropdownClassName: undefined,
  //   options: [ 'left', 'center', 'right', 'justify' ],
  //   left: { className: undefined, title: undefined },
  //   center: { className: undefined, title: undefined },
  //   right: { className: undefined, title: undefined },
  //   justify: { className: undefined, title: undefined },
  //   title: undefined
  // },
  // colorPicker: {
  //   className: undefined,
  //   component: undefined,
  //   popupClassName: undefined,
  //   colors: [ 'rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
  //     'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
  //     'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
  //     'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
  //     'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
  //     'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)' ],
  //   title: undefined
  // },
  link: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    dropdownClassName: undefined,
    showOpenOptionOnHover: true,
    defaultTargetOption: '_self',
    options: [ 'link', 'unlink' ],
    link: { className: undefined, title: undefined },
    unlink: { className: undefined, title: undefined }
  },
  // emoji: {
  //   className: undefined,
  //   component: undefined,
  //   popupClassName: undefined,
  //   emojis: [
  //     '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
  //     '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
  //     '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
  //     '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
  //     '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
  //     '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
  //     '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
  //     '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
  //     '✅', '❎', '💯'
  //   ],
  //   title: undefined
  // },
  // embedded: {
  //   className: undefined,
  //   component: undefined,
  //   popupClassName: undefined,
  //   defaultSize: {
  //     height: 'auto',
  //     width: 'auto'
  //   },
  //   title: undefined
  // },
  // image: {
  //   className: undefined,
  //   component: undefined,
  //   popupClassName: undefined,
  //   urlEnabled: true,
  //   uploadEnabled: true,
  //   alignmentEnabled: true,
  //   uploadCallback: undefined,
  //   inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
  //   alt: { present: false, mandatory: false },
  //   defaultSize: {
  //     height: 'auto',
  //     width: 'auto'
  //   },
  //   title: undefined
  // },
  // remove: { className: undefined, component: undefined, title: undefined },
  history: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: [ 'undo', 'redo' ],
    undo: { className: undefined, title: undefined },
    redo: { className: undefined, title: undefined },
    title: undefined
  }
}
