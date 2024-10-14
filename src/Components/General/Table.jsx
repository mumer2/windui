import React from 'react';
import CodePreview from './CodePreview';
import { Table2 } from './Table2';

const Table = () => {
  return (
    <>
     <div className="tables">
            <h1>Tables</h1>
            <p>The table element represents tabular data — that is, the information presented in a two-dimensional table comprised of rows and columns of cells containing data.</p>
        </div>

        <div className="table-container">
        <Table2/>
    </div>

    <div className="tables">
            <h2>Variations</h2>
            <h4>Simple Table</h4>
        </div>

        <CodePreview/>

        <div className="table-container">
     <Table2/>
    </div>
    </>
  );
};

export default Table;
