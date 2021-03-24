import React, {ChangeEvent, useEffect, useState} from 'react';
import {debuglog} from "util";

type ProfileStatusWithHooksType = {
    status: string
    updateStatus: (status:string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    // let editMode = stateWithSetState[0]
    // let setEditMode = stateWithSetState[1]

    useEffect(()=> {
        debugger
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;