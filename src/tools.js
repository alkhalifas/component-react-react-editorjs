// tools.js
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import Alert from 'editorjs-alert';
const mathTex = require('editorjs-math');

class MyHeader extends Header {
    get levels() {
        return super.levels.filter((l: any) => [1, 3].includes(l.number));
    }

    get defaultLevel() {
        /**
         * Use H2 as default header
         */
        return this.levels[0];
    }
}

// class MyTool {
//     render() {
//         return <h5>Title</h5>
//     }
//     save(textarea) {
//         return {
//             text: textarea.value
//         }
//     }
// }


export const EDITOR_JS_TOOLS = {
    // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
    paragraph: {
        class: Paragraph,
        inlineToolbar: false,
    },
    // embed: Embed,
    // table: Table,
    // list: List,
    // warning: Warning,
    alert: {
        class: Alert,
        contenteditable: false,
        inlineToolbar: false,
        shortcut: 'CMD+SHIFT+A',
        config: {
            defaultType: 'danger',
            messagePlaceholder: 'Alerts are generally used as placeholders to edit content.',
        },
    },
    code: Code,
    // linkTool: LinkTool,
    // image: Image,
    // raw: Raw,
    math: {
        class: mathTex, // for CDN: window.MathTex
    },
    header: {
        class: MyHeader,
        config: {
            placeholder: "Header"
        },
        // inlineToolbar: ['marker', 'link'],
    },
    // quote: Quote,
    marker: Marker,
    // checklist: CheckList,
    // delimiter: Delimiter,
    inlineCode: InlineCode,
    image: SimpleImage,
    // MyTool:MyTool
}
