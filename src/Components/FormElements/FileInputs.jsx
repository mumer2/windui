import React from 'react'
import File from './File'
import CodePreview from '../General/CodePreview'
import Choosefile from './Choosefile'

export const FileInputs = () => {
  return (
    <div>
        <div className="fileinputs">
            <h1>File Inputs</h1>
            <p>The File Input component lets the user choose one or more files from their device.</p>
        </div>
        <div className="file-uplod">
        <File/>
        </div>

        <div className="fileinputs">
            <h2>Variations</h2>
            <h4>Button File Input</h4>
        </div>
        <CodePreview/>
        <div className="file-uplod">
        <Choosefile/>
        </div>
    </div>
  )
}
