import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const Folder = () => (
    <i className="fa fa-folder" aria-hidden="true"></i>
);
const File = () => (
    <i className="fa fa-file-o" aria-hidden="true"></i>
);

function Name({ text }) {
    return (
        <span className="name">
            {text}
        </span>
    );
}

function Message({ latestCommit }) {
    const { message } = latestCommit;
    return (
        <div className="msg">
            {message}
        </div>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
}

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

function FileList({ testFiles }) {
    return (
        <div className="box">
            <table>
                {testFiles.map((testFiles) =>
                    <tr className="list" key={testFiles.id}>
                        <td>
                            {testFiles.type === 'folder' ? <Folder /> : <File />}
                            <Name text={testFiles.name} />
                        </td>
                        <td>
                            <Message latestCommit={testFiles.latestCommit} />
                        </td>
                        <td>
                            <Time time={testFiles.updated_at} />
                        </td>
                    </tr>
                )}
            </table>
        </div>
    );
}

ReactDOM.render(<FileList testFiles={testFiles} />, document.getElementById('root'));