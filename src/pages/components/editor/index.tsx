/*
 * @Description: 富文本编辑器
 * @Author: hyt
 * @Date: 2022-05-01 14:26:31
 * @LastEditTime: 2022-05-01 14:40:48
 * @LastEditors: hyt
 */

import BraftEditor from "braft-editor";
import { useState } from "react";

interface Props {

}

const MyEditor = (props: Props) => {

    const [editorState, setEditorState] = useState(null)

    const handleChange = (editorState: any) => {
        console.log(editorState);
        setEditorState(editorState)

    }

    return (
        <>
            <BraftEditor
                onChange={handleChange}
                value={editorState}
            />
        </>
    )
}

export default MyEditor;