import React, { Component } from 'react'
import { data } from "./data";
import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './tools'
const ReactEditorJS = createReactEditorJS()

export default class ReactEditor extends Component {

    async onSave() {
        const outputData = await this.editorInstance.save();
        console.log("Saving!")
        console.log("outputData", outputData);
    }



    render() {

        return (
            <>
                <button onClick={this.onSave.bind(this)} type="button">
                    Save Content (check console output)
                </button>
                <ReactEditorJS
                    // readOnly={true}
                    onInitialize={instance => (this.editorInstance = instance)}
                    onReady={ () => console.log('Editor.js is ready to work!')}
                    onChange={e => console.log(e)}
                    tools={EDITOR_JS_TOOLS}
                    data={data}
                />
            </>

        )
    }
};
